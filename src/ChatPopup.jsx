// ChatPopup.jsx
import React, { useState } from "react";
// import "./ChatPopup.css"; // Optional: For styling

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageSend = (e) => {
    e.preventDefault();
    // Handle message sending (e.g., send to server or update chat log)
    console.log("Message sent: ", message);
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="chat-popup">
      <button className="chat-toggle" onClick={toggleChat}>
        {isOpen ? "Close Chat" : "Open Chat"}
      </button>
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">Chat with Us</div>
          <div className="chat-body">
            {/* Chat messages will go here */}
          </div>
          <form className="chat-footer" onSubmit={handleMessageSend}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
