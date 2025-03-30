import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

/**
 * Wrapper component for routes that require authentication
 * If user is not authenticated, they will be redirected to the login page
 */
function AuthRequired({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { route } = useAuthenticator((context) => [context.route]);
  
  useEffect(() => {
    // If user is not authenticated, redirect to login
    if (route !== 'authenticated') {
      // Save the attempted location for redirecting after login
      navigate('/login', { 
        state: { from: location.pathname } 
      });
    }
  }, [route, navigate, location]);

  // Only render children if authenticated
  return route === 'authenticated' ? children : null;
}

export default AuthRequired;