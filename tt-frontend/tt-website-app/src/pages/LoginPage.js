// src/pages/LoginPage.js
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './LoginPage.css'; // Use the new CSS file
import {
    Logotl
} from '../ui-components';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-form">
                <Authenticator>
                    {({ signOut, user }) => (
                        <main>
                            <h1>Welcome</h1>
                            <p>{user?.username}</p>
                            <p> </p>
                            <img src={user?.photo} alt="Profile" />
                            <p> </p>
                            <button onClick={signOut}>Sign out</button>
                            <p> </p>
                            <button onClick={() => { window.location.href = "/settings" }}>Update Information</button>
                        </main>
                    )}
                </Authenticator>
            </div>
                <div className="login-branding">
                    <Logotl />
                    <h1>Deploy software in your business asap</h1>
                </div>
            </div>
    );
};

export default LoginPage;