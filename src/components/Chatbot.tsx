"use client";

import { useEffect, useRef, useState } from "react";

export interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({
  isOpen,
  onClose,
  messages,
  onSendMessage,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle send button click or Enter key press
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      ref={panelRef}
    >
      {/* Chatbot Header */}
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <h2 className="text-lg font-bold">Tutor Personal</h2>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close Chatbot"
        >
          ✕
        </button>
      </div>
      {/* Chatbot Body */}
      <div
        className="p-4 overflow-y-auto flex-1 h-full"
        style={{ maxHeight: "calc(100% - 128px)" }}
      >
        {/* Render messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      {/* Chatbot Footer */}
      <div className="p-4 bg-gray-200 flex items-center">
        <input
          type="text"
          className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
