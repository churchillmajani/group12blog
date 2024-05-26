import React from "react";

function ChatbotButton() {
  const handleClick = () => {
    window.location.href = "https://group-12-hqoacyzm7zzhv3wbsasxti.streamlit.app/";
  };

  return (
    <button className="chatbot" onClick={handleClick}>
      Chatbot
    </button>
  );
}

export default ChatbotButton;