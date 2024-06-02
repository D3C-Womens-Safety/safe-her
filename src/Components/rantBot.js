import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Person from "../Images/person-pic.png";
import Sera from "../Images/sera-pic.png";
import "../Styles/rantbot.css";

export const RantBot = () => {
  const [userId] = useState(uuidv4());
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async (messageContent = input) => {
    if (messageContent.trim() === "" || rateLimitExceeded) return;

    const userMessage = { role: "user", content: messageContent.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await axios.post("https://rant-bot.onrender.com/chat", {
        userId,
        message: messageContent.trim(),
      });

      console.log(response.data); // Log the response data

      setMessages((prev) => [...prev, { role: "assistant", content: response.data.response }]);
      setIsTyping(false);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setRateLimitExceeded(true);
      }
      setIsTyping(false);
    }
  };

  const handlePromptClick = (prompt) => {
    sendMessage(prompt);
  };

  return (
    <div>
        <div className="header-bot">
            <h1>Rant To Us</h1>
            <p> Need to rant? Use our chat bot to do so. </p>
        </div>
        <div className="chat-container">
        <div className="chat-box">
            {messages.length === 0 && input.trim() === "" && (
            <div className="welcome-message">
                <h2>Hi <span className="green">Person</span>!</h2>
                <h2> How can I help today? </h2>
            </div>
            )}
            {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
                <div className="message-title">
                    <div>
                        <img src={msg.role === "user" ? Person : Sera} alt="avatar role"/>
                    </div> 
                    <div>
                        <strong>{msg.role === "user" ? "You" : "Sera"}</strong>
                        <div className="message-content">{msg.content}</div>
                    </div>    
                </div>
            </div>
            ))}
            {isTyping && (
            <div className="message assistant">
                <div className="message-title">
                    <div>
                        <img src={Sera} alt="avatar role"/>
                    </div> 
                    <div>
                        <strong>Sera </strong>
                        <div className="message-content">Sera is typing...</div>
                    </div>    
                </div>
            </div>
            )}
            <div ref={messagesEndRef} />
        </div>
            <div className="bottom-component">
                {rateLimitExceeded ? (
                    <div className="rate-limit-message">
                    Rate limit exceeded. Please refresh the page or restart the conversation.
                    </div>
                ) : (
                    <div className="input-section">
                    {messages.length === 0 && input.trim() === "" && (
                        <div className="prompts">
                            <div className="prompt" onClick={() => handlePromptClick("I'm feeling overwhelmed lately.")}>
                                I'm feeling overwhelmed lately.
                            </div>
                            <div className="prompt" onClick={() => handlePromptClick("Can I vent about my day?")}>
                                Can I vent about my day?
                            </div>
                            <div className="prompt" onClick={() => handlePromptClick("I need to talk about something that's been bothering me.")}>
                                I need to talk about something that's been bothering me.
                            </div>
                        </div>
                    )}
                        <div className="input-box">
                            <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Tell me anything..."
                            />
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                )}
                <div className="disclaimer">
                    <p>
                    Disclaimer: This chatbot is not a source for mental/physical health care, legal advice, or diagnosis. 
                    The responses provided are for general informational purposes only and are not a substitute for 
                    professional advice. If you need professional help, please consult a qualified expert.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};
