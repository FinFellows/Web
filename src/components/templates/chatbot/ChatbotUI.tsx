'use client';

import ChatBubble from '@/components/atom/ChatBubble';
import React, { useRef, useState } from 'react';
import AutoResizableTextarea from '@/components/atom/AutoResizableTextarea';
import GoldToriIcon from '@/public/icons/glasses_goldtori.svg';
import { postChatbotNotAdmin } from '@/api/chatbotApi';
import withApi from '@/utils/withApi';

type TChatData = {
  profile: 'me' | 'bot';
  text: string;
};

// const chatData: TChatData[] = [
//   // DUMMY DATA
//   { profile: 'bot', text: '안녕! 나는 금토리라고해!\n무엇이 궁금하니?' },
//   //   { profile: 'me', text: '안녕! 적금이 뭐야?' },
//   //   {
//   //     profile: 'bot',
//   //     text: '적금이란 돈은 지급해서 나중에 쓸 목적으로 만든 저축 계좌 같은거야. 일정한 돈을 정기적으로 거기에 넣고 그 돈에 이자가 붙어서 늘어나는데, 그 이자도 다시 돈에 더해져 더 커지는거야. 그런데 적금은 돈을 끄는데 제한이 있어서 특정한 목표나 기간에 돈을 쓰려면 계획적으로 관리해야 해. 예를 들면, 자동차나 여행을 위해 돈 모으려면 적금이 유용하겠지!',
//   //   },
// ];

export default function ChatbotUI() {
  const [chatData, setChatData] = useState<TChatData[]>([
    { profile: 'bot', text: '안녕! 나는 금토리라고해!\n무엇이 궁금하니?' },
  ]);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false); // 전송 버튼 로딩
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function splitRenderChatbotAnswer(answer: string) {
    const answers = answer
      .split('.')
      .filter((s) => s.length > 0)
      .map((s) => s.trim() + '.');
    // 0.5초 간격으로 렌더링
    answers.forEach((answer, i) => {
      setTimeout(() => {
        setChatData((prev) => [...prev, { profile: 'bot', text: answer }]);
      }, 1000 * i);
    });
  }
  async function handleChatbotSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = textareaRef.current?.value.trim();
    if (!question) return;

    setIsSubmitLoading(true);
    setChatData((prev) => [...prev, { profile: 'me', text: question }]);
    textareaRef.current!.value = '';

    await withApi(() => postChatbotNotAdmin(question), {
      onSuccess: ({ answer }) => {
        splitRenderChatbotAnswer(answer);
      },
      onError: (error) => {
        // TODO: 에러 처리
      },
    });
    setIsSubmitLoading(false);
  }
  return (
    <div className='absolute right-25 bottom-100 w-275 max-h-450 h-full rounded-12 overflow-hidden desktop:w-430 desktop:max-h-600'>
      {/* header */}
      <div className=' w-full flex justify-center items-center text-white text-13 font-bold py-10 bg-mainLevel400 desktop:text-21'>
        금토리에게 물어봐
      </div>
      {/* body */}
      <div className='pt-18 pb-10 bg-mainLevel100 h-[calc(100%-50px)] flex flex-col justify-between'>
        {/* chat */}
        <div className='flex flex-col-reverse px-13 pb-40 overflow-scroll'>
          {chatDataWithMargin(chatData)
            .toReversed()
            .map(({ profile, text, marginBottom }, i) =>
              profile === 'bot' ? (
                <div key={i} className='flex justify-start gap-7 desktop:gap-10'>
                  <ChatbotProfile />
                  <ChatBubble profile={profile} marginBottom={marginBottom}>
                    {text}
                  </ChatBubble>
                </div>
              ) : (
                <div key={i} className='flex justify-end'>
                  <ChatBubble profile={profile} marginBottom={marginBottom}>
                    {text}
                  </ChatBubble>
                </div>
              ),
            )}
        </div>
        {/* send */}
        <form onSubmit={handleChatbotSubmit} className='flex justify-center items-end gap-5 px-7'>
          <AutoResizableTextarea
            maxRows={2}
            textareaRef={textareaRef}
            autoComplete='off'
            // TODO: 글자 크기에 따라 h-47값 변경 필요 (Button도 동일)
            // py-10 px-13
            className=' bg-white text-darkComponent rounded-6 py-5 px-7 text-13 resize-none outline-none w-full h-30 desktop:h-47 desktop:text-18 desktop:py-10 desktop:px-12'
            onKeyUp={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                handleChatbotSubmit(event as any);
              }
            }}
          ></AutoResizableTextarea>
          <button
            disabled={isSubmitLoading}
            className='flex justify-center items-center shrink-0 bg-darkComponent text-white text-10 py-7 px-13 rounded-6 h-30 disabled:opacity-50 disabled:cursor-not-allowed desktop:label-medium desktop:py-23 desktop:px-21'
          >
            전송
          </button>
        </form>
      </div>
    </div>
  );
}

const ChatbotProfile = () => (
  <div className='flex justify-center items-center shrink-0 w-32 h-32 bg-white rounded-full overflow-hidden desktop:w-50 desktop:h-50'>
    <div style={{ transform: 'scaleX(-1)' }} className='mt-15'>
      <GoldToriIcon />
    </div>
  </div>
);

function chatDataWithMargin(chatData: TChatData[]) {
  return chatData.map((chat, i) => {
    if (i === chatData.length - 1) return { ...chat, marginBottom: 0 };
    if (chatData[i].profile === chatData[i + 1].profile) {
      return { ...chat, marginBottom: 6 };
    } else {
      return { ...chat, marginBottom: 18 };
    }
  });
}
