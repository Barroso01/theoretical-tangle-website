import React, { useEffect } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom'; 
import { Authenticator,useAuthenticator } from '@aws-amplify/ui-react'; 
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Hook to access the current location
  const { route } = useAuthenticator((context) => [context.route]); // Get the current route (or auth state) from Authenticator context

  useEffect(() => {
    if (route === 'authenticated') {
      // If user is authenticated, navigate to url the user was trying to access or (||) default to '/settings'
      const from = location.state?.from || '/settings';  // from = redirect URL
      navigate(from, {replace: true});
    }
  }, [route, navigate, location]); // Add dependencies to the useEffect hook

  return (
    <div className="login-container"> 
      <div className = "login-card">
        <h2 className = "login-heading"> Welcome to the lab's website </h2>
        <h3 className = "login-subheading"> Please login to continue </h3> 
        
        <Authenticator/>

      </div>
    </div> 
  ); 
}

export default LoginPage; 