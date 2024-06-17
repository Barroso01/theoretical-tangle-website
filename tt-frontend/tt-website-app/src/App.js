import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './services/UserContext';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import SettingsPage from './pages/SettingsPage'; 
import LoginPage from './pages/LoginPage';
import MapsPage from './pages/MapsPage'; 
import ChatPage from './pages/ChatPage';

import './App.css';

Amplify.configure(awsExports);
Amplify.configure(config);



function App() {
    return (

        <Authenticator>
            {({ signOut, user }) => (
            <UserProvider>
            
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/maps" element={<MapsPage />} />
                        <Route path="/chat" element={<ChatPage />} />
                    </Routes>
                </Router>
            </UserProvider>
            )}
        </Authenticator>
    
    );
}


export default App;