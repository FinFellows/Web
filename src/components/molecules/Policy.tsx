'use client';
import Link from 'next/link';
// Policy 컴포넌트
import React, { useState } from 'react';

const Policy = () => {
  const [contents, setContents] = useState([
    {
      title: '정책1',
      content: '카드 뉴스 내용 1',
    },
    {
      title: '정책2',
      content: '카드 뉴스 내용 2',
    },
    {
      title: '정책3',
      content: '금융 정보 내용 1',
    },
    {
      title: '정책4',
      content: '금융 정보 내용 2',
    },
    {
      title: '정책5',
      content: '금융 정보 내용 1',
    },
  ]);

  return (
    <div className='flex-col my-[30px]'>
      {contents.map((item, index) => (
        <Link
          key={index}
          href={{
            pathname: `/ThankYou/policy`,
            query: {
              title: item.title,
              content: item.content,
            },
          }}
        >
          <div key={index} className='my-[30px] border-2 border-color-[#EAEAEA] rounded-lg'>
            <h2 className='text-l font-bold bg-[#D6D6D6] p-4 hover:bg-[#68B891]'>{item.title}</h2>
            <p className='ml-4 mt-[10px] mb-[80px] text-l bg-[#FFFFFF]'>{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Policy;
