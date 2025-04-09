// src/components/AppLayout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { NavBarHeader, NavBarHeader2 } from '../ui-components';

function AppLayout({ children }) {
  const location = useLocation();
  const { route, user } = useAuthenticator((context) => [context.route, context.user]);
  
  // Determine current page
  const path = location.pathname;
  const currentPage = 
    path === '/' ? 'home' : 
    path.startsWith('/projects') ? 'projects' :
    path.startsWith('/jobs') ? 'jobs' :
    path.startsWith('/company') ? 'company' : '';
  
  // Check authentication status
  const isAuthenticated = route === 'authenticated';
  
  return (
    <div>
      {isAuthenticated ? (
        <NavBarHeader 
          userTL={user ? { 
            profilepicture: user.attributes?.picture || '/default-avatar.png'
          } : null}
          isAuthenticated={true}
          currentPage={currentPage}
          width="100%"
          className="navbar-header"
        />
      ) : (
        <NavBarHeader2
          isAuthenticated={false}
          currentPage={currentPage}
          width="100%"
          className="navbar-header"
        />
      )}
      
      <main>
        {children}
      </main>
    </div>
  );
}

export default AppLayout;