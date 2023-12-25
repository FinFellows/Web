'use client';
// Education 컴포넌트
import React, { useState } from 'react';

const Education = () => {
  const [contents, setContents] = useState([
    {
      title: '카드 뉴스 1',
      content: '카드 뉴스 내용 1',
    },
    {
      title: '카드 뉴스 2',
      content: '카드 뉴스 내용 2',
    },
    {
      title: '금융 정보 1',
      content: '금융 정보 내용 1',
    },
    {
      title: '금융 정보 2',
      content: '금융 정보 내용 2',
    },
  ]);

  return (
    <div className='flex-col'>
      {contents.map((item, index) => (
        <div key={index} className='border-2 border-color-[#EAEAEA] rounded-lg'>
          <h2 className='text-l font-bold bg-[#D6D6D6] p-4 hover:bg-[#68B891]'>{item.title}</h2>
          <p className='mb-[80px] text-l bg-[#FFFFFF]'>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
