import React, { useState, useEffect } from 'react';
import { generateClient } from "@aws-amplify/api";
import { createMessage } from '../graphql/mutations';
import { listMessages } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import './Chat.css';

const Chat = () => {
  // Initialize state variables
  const [messages, setMessages] = useState([]);
  const client = generateClient();
  const [inputValue, setinputValue] = useState('');

  // Hook to fetch messages and subscribe to new messages
  useEffect(() => {
    // Fetch messages
    const fetchMessages = async () => {
      try {
        const messageData = await client.graphql({
          query: listMessages
        });
        setMessages(messageData.data.listMessages.items); // Update state messages with items from query
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

    return () => subscription.unsubscribe(); // Unsubscribe from the subscription when the component unmounts
  }, [client]);

  // Function to handle the message change 
  const handleMessageChange = (e) => {
    setinputValue(e.target.value);
  };

  // Function to handle the message submission
  const handleMessageSubmit = async () => {
    if (inputValue.trim()) {
      await client.graphql({
        query: createMessage,
        variables: { input: { content: inputValue, owner: 'Sneaky'} }
      });
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message.content}</p>
        ))}
      </div>
      <input value={inputValue} onChange={handleMessageChange} placeholder="Type a message" />
      <button onClick={handleMessageSubmit}>Send Message</button>
    </div>
  );
};

export default Chat;

  