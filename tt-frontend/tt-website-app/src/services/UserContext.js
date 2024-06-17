import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { getUserTL } from '../graphql/queries';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const { user } = useAuthenticator();
    const userId = user.username;
    const [userDetails, setUserDetails] = useState(null);
    const client = generateClient();

    useEffect(() => {
        if (user) {
            console.log("User object from Authenticator:", user);
            const userId = user.username;  // Commonly, `sub` is used as a unique identifier
            console.log("Using user ID for query:", userId);
    
            const fetchData = async () => {
                const response = await client.graphql({
                    query: getUserTL,
                    variables: { id: userId }
                });
                if (response.data.getUserTL) {
                    setUserDetails(response.data.getUserTL);
                } else {
                    console.error("No user details returned:", response);
                }
            };
    
            fetchData().catch(error => {
                console.error("Error fetching user details:", error);
            });
        } else {
            console.log("No user logged in.");
            setUserDetails(null);
        }
    }, [user, client]); // Including client in dependencies as per ESLint suggestion
    

    return (
        <UserContext.Provider value={{ user, userDetails }}>
            {children}
        </UserContext.Provider>
    );
};

