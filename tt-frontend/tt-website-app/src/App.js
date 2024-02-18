import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { studioTheme } from "./ui-components";
import config from './amplifyconfiguration.json';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import SettingsPage from './pages/SettingsPage'; 
import LoginPage from './pages/LoginPage'; 

import './App.css';

Amplify.configure(awsExports);
Amplify.configure(config);



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}


export default withAuthenticator(App);


// Authentication
// function App({ signOut, user }) {
// <Header  signOut={signOut} user={user} />
//export default withAuthenticator(App);
