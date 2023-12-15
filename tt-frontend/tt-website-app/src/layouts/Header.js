import React from 'react';
import './Header.css';


const Header = ({ signOut, user }) => {
    return (
        <header className="App-header">
            <div className="logo"> TT </div>
            <div className="user-info">
                <span>{user.username}</span>
                <button onClick={signOut}>Sign Out</button>
            </div>
        </header>
    );
};

export default Header;



