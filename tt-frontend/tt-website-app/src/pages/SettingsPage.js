import React, { useEffect, useState } from 'react';
import { signOut, fetchUserAttributes } from 'aws-amplify/auth';
import {useAuthenticator} from '@aws-amplify/ui-react'; 
//import { useUser } from '../services/UserContext'; // Import user context (delete later if not used)
import { SideBar, EditProfile } from '../ui-components';
import './SettingsPage.css'; // Ensure CSS is imported

const SettingsPage = () => {
    const { user } = useAuthenticator((context) => [context.user]); // Get the current user from Authenticator context
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch user atributes when the component mounts
    useEffect(() => {
        const getUserAttributes = async () => {
            try { 
                setLoading(true); 
                const attributes = await fetchUserAttributes();
                const userInfo = {
                    id: user?.userId,
                    email: attributes.email,
                    name: attributes.name || attributes.email,
                    phone: attributes.phone_number,
                    // Add other attributes as needed for your components
                };
                setUserDetails(userInfo);
            } catch (error) {
                console.error("Error fetching user attributes:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            getUserAttributes();
        }
    }, [user]);

        // Handle sign out
        const handleSignOut = async () => {
            try {
                await signOut();
            } catch (error) {
                console.error("Error signing out:", error);
            }
        };
    
        if (loading) {
            return <div className="settings-page">
                <div className="settings-loading">Loading your profile...</div>
            </div>;
        }
    

    return (
        <div className="settings-page">
            <h1 className="gradient-strip">Settings</h1>
            <div className="settings-content">
                <div className="sidebar-bubble">
                    <SideBar />
                </div>
                <div className="editprofile-bubble">
                    <EditProfile userTL={userDetails} />
                </div>
            </div>
            <button className="signout-button" onClick={handleSignOut}>
                Sign Out
            </button>
            <div className="gradient-strip"></div>
        </div>
    );
};

export default SettingsPage;