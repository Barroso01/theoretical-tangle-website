import React from 'react';
import { signOut } from 'aws-amplify/auth';
import { useUser } from '../services/UserContext'; // Import user context
import { NavBarHeader, SideBar, EditProfile } from '../ui-components';
import './SettingsPage.css'; // Ensure CSS is imported

const SettingsPage = () => {
    const { user, userDetails } = useUser();

    return (
        <div className="settings-page">
            <NavBarHeader userTL={userDetails} />
            <h1 className="gradient-strip">Settings</h1>
            <div className="settings-content">
                <div className="sidebar-bubble">
                    <SideBar />
                </div>
                <div className="editprofile-bubble">
                    <EditProfile userTL={userDetails} />
                </div>
            </div>
            <button className="signout-button" onClick={() => signOut()}>
                Sign Out
            </button>
            <div className="gradient-strip"></div>
        </div>
    );
};

export default SettingsPage;

