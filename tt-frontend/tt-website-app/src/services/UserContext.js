import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';

// Create the context
const UserContext = createContext(null);

// Provider component
export function UserProvider({ children }) {
  // useAuthenticator will work now because we've wrapped the app with Authenticator.Provider
  const { user, route } = useAuthenticator((context) => [context.user, context.route]);
  const [userAttributes, setUserAttributes] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user attributes when authenticated
  useEffect(() => {
    const getUserData = async () => {
      if (route === 'authenticated' && user) {
        try {
          setLoading(true);
          // Get user attributes from Cognito
          const attributes = await fetchUserAttributes();
          setUserAttributes(attributes);
        } catch (error) {
          console.error('Error fetching user attributes:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setUserAttributes(null);
        setLoading(false);
      }
    };

    getUserData();
  }, [user, route]);

  // Value to be provided to consumers
  const value = {
    user,
    userAttributes,
    isAuthenticated: route === 'authenticated',
    loading
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Custom hook for using the context
export function useUser() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}