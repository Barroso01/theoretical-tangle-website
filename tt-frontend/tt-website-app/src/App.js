// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './services/UserContext';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Import configuration
import awsExports from './aws-exports';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import SettingsPage from './pages/SettingsPage'; 
import MapsPage from './pages/MapsPage'; 
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';

// Import components
import AuthRequired from './components/AuthRequired';
import AppLayout from './components/AppLayout';

// Configure Amplify once
Amplify.configure(awsExports);

function App() {
    return (
        <Router>
            <Authenticator.Provider>
                <UserProvider>
                    <AppLayout>
                        <Routes>
                            {/* Public routes - accessible without authentication */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            
                            {/* Protected routes - require authentication */}
                            <Route path="/projects" element={
                                <AuthRequired>
                                    <ProjectPage />
                                </AuthRequired>
                            } />
                            
                            <Route path="/settings" element={
                                <AuthRequired>
                                    <SettingsPage />
                                </AuthRequired>
                            } />
                            
                            <Route path="/maps" element={
                                <AuthRequired>
                                    <MapsPage />
                                </AuthRequired>
                            } />
                            
                            <Route path="/chat" element={
                                <AuthRequired>
                                    <ChatPage />
                                </AuthRequired>
                            } />
                            
                            {/* Catch-all redirect to home page */}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </AppLayout>
                </UserProvider>
            </Authenticator.Provider>
        </Router>
    );
}

export default App;