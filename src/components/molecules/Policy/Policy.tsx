// Policy 컴포넌트
'use client';
import Link from 'next/link';

import React, { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart.svg';
import Heartclick from '@/public/icons/heartclick.svg';
import SearchFieldForPolicy from '../SearchFieldForPolicy';
const Policy = () => {
  const [contents, setContents] = useState([
    {
      title: '정책1',
      content:
        '간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간단한 내용간간단단 내용간단한내용간간단단간단단',
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
  // 검색어로 필터링된 컨텐츠 가져오기
  const [searchQuery, setSearchQuery] = useState('');
  const filteredContents = contents.filter((item) => item.title.includes(searchQuery));
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '....';
    } else {
      return text;
    }
  };
  return (
    <div className='flex-col my-[30px]'>
      <SearchFieldForPolicy searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='border-b-[2px] border-color-[#D6D6D6] pb-3 text-2xl font-bold'>청년 금융 정책</div>
      {filteredContents.map((item, index) => (
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
          <div key={index} className='my-[30px] border-2 border-color-[#EAEAEA] rounded-lg h-[230px]'>
            <div className='bg-[#EAEAEA] px-[10px]  h-[60px] hover:bg-main_level '>
              <h2 className='text-l font-bold w-[700px] p-[15px]'>{item.title} </h2>

              <p className='z-10 mt-[-45px] ml-[630px]' onClick={() => handleHeartClick(index)}>
                {heartStates[index] ? <Heartclick /> : <Heartdefault />}
              </p>
            </div>
            <p className='mt-[10px] text-l bg-[#FFFFFF] p-[15px]'>{truncateText(item.content, 239)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Policy;
