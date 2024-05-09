import {
    NavBarHeader,
    SideBar,
    Logotl
} from '../ui-components';
import './SettingsPage.css'; // Use the new CSS file
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

const SettingsPage = () => {
    

    return (
        <div>
            <NavBarHeader className="navbar-header" width={'100vw'} />

            <section className="settings-section">
                <div className="settings-content">
                    <SideBar width={'30vw'} />
                </div>
                <div className="settings-form">
                    <h1>Settings</h1>
                    <Authenticator>
                        {({ user }) => (
                            <div>
                                <h2>Welcome, {user.username}</h2>
                                <button onClick={() => console.log(user)}>Log user</button>
                            </div>
                        )}
                    </Authenticator>
                    <Logotl />
                </div>
            </section>
                            </div>
                        );
                    };

export default withAuthenticator(SettingsPage)

