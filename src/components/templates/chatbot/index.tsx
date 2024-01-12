'use client';

import React, { useState } from 'react';
import ChatbotUI from './ChatbotUI';
import GoldToriIcon from '../../../public/icons/default_goldtoriv3.svg';

export default function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      {showChatbot && <ChatbotUI />}
      <button className=' absolute right-25 bottom-25 outline-none' onClick={() => setShowChatbot((prev) => !prev)}>
        <GoldToriIcon />
      </button>
    </>
  );
}
