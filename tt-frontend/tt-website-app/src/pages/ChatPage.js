import React from 'react';
import Chat from '../chat-components/Chat'; // Adjust the path according to your project structure
import './ChatPage.css';

const ChatPage = () => {
    return (
        <div className="chat-container">
            <h1>Chat Room</h1>
            <Chat />
        </div>
    );
};

export default ChatPage;
