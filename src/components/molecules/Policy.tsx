// Policy 컴포넌트
'use client';
import Link from 'next/link';

import React, { useState } from 'react';
import Heartdefault from '../../public/icons/grayheart.svg';
import Heartclick from '@/public/icons/heartclick.svg';

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
  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});
  const handleHeartClick = (index: number) => {
    setHeartStates({
      ...heartStates,
      [index]: !heartStates[index],
    });
  };
  const preventClick = (event: React.MouseEvent) => {
    event.preventDefault();
  };
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
            <div className='bg-[#EAEAEA] px-[10px] hover:bg-main_level h-[60px]'>
              <h2 className='text-l font-bold w-[700px] p-[15px]'>{item.title} </h2>

              <p className='z-10 mt-[-45px] ml-[630px]' onClick={() => handleHeartClick(index)}>
                {heartStates[index] ? <Heartclick /> : <Heartdefault />}
              </p>
            </div>
            <p className='mt-[10px] mb-[80px] text-l bg-[#FFFFFF] p-[15px]'>{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Policy;
