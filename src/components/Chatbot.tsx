"use client";

import React, { useState, useEffect, useRef } from "react";

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      ref={panelRef}
    >
      {/* Chatbot Header */}
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <h2 className="text-lg font-bold">Chatbot</h2>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close Chatbot"
        >
          ✕
        </button>
      </div>
      {/* Chatbot Body */}
      <div className="p-4 overflow-y-auto h-full">
        {/* Chat content goes here */}
        <p>Welcome to the chatbot!</p>
      </div>
      {/* Chatbot Footer */}
      <div className="p-4 bg-gray-200">
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          placeholder="Type your message..."
        />
      </div>
    </div>
  );
};

export default Chatbot;
