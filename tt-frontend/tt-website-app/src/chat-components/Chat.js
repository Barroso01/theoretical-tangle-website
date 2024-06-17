import React, { useState, useEffect } from 'react';
import { generateClient } from "@aws-amplify/api";
import { createMessage } from '../graphql/mutations';
import { listMessages } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import './Chat.css';
import { Authenticator, useAuthenticator, withAuthenticator} from '@aws-amplify/ui-react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const client = generateClient();
  const [inputValue, setInputValue] = useState('');
  const { user } = useAuthenticator(); // Use useAuthenticator hook to get the current user

  useEffect(() => {
    // Fetch messages on component mount
    const fetchMessages = async () => {
      try {
        const messageData = await client.graphql({
          query: listMessages
        });
        setMessages(messageData.data.listMessages.items);
      } catch (err) {
        console.log('error fetching messages', err);
      }
    };
    fetchMessages();
    // Subscribe to new messages
    const subscription = client.graphql({
      query: onCreateMessage
    }).subscribe({
      next: (eventData) => {
        const newMessage = eventData.value.data.onCreateMessage;
        setMessages(prevMessages => [...prevMessages, newMessage]);
      }
    });

    return () => subscription.unsubscribe();
  }, [client]);
  // Handle input field change on event e 
  const handleMessageChange = (e) => {
    setInputValue(e.target.value);
  };
  // Handle message submission
  const handleMessageSubmit = async () => {
    if (inputValue.trim()) {
      await client.graphql({
        query: createMessage,
        variables: { input: { content: inputValue, owner: user.username } } // Use current user's username as owner
      });
      setInputValue(''); // Clear input field after submission
    }
  };

  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <div className="message" key={index}>
          <p>{message.content}</p>
          <small>{message.owner || 'Unknown'} at {new Date(message.timestamp).toLocaleString()}</small>
        </div>
      ))}
      <input className="input-field" value={inputValue} onChange={handleMessageChange} placeholder="Type a message" />
      <button className="send-button" onClick={handleMessageSubmit}>Send Message</button>
    </div>
  );
};

export default withAuthenticator(Chat);

  