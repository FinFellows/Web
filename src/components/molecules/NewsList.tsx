// NewsList 컴포넌트
'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import Link from 'next/link';

const NewsList = () => {
  const [contents, setContents] = useState([
    {
      title: '뉴스 헤드라인 1',
      content: '간단한 내용1',
      date: '뉴스 일자',
    },
    {
      title: '뉴스 헤드라인 2',
      content: '간단한 내용2',
      date: '뉴스 일자',
    },
    {
      title: '뉴스 헤드라인 3',
      content: '간단한 내용3',
      date: '뉴스 일자',
    },
    {
      title: '뉴스 헤드라인 4',
      content: '간단한 내용4',
      date: '뉴스 일자',
    },
    {
      title: '뉴스 헤드라인 5',
      content: '간단한 내용5',
      date: '뉴스 일자',
    },
    {
      title: '뉴스 헤드라인 6',
      content: '간단한 내용6',
      date: '뉴스 일자',
    },
    {
      title: '뉴스 헤드라인 7',
      content: '간단한 내용7',
      date: '뉴스 일자',
    },
  ]);
  return (
    <div>
      {contents.map((item, index) => (
        <Link
          key={index}
          href={{
            pathname: `/learnWithUs/news`,
            query: {
              title: item.title,
              date: item.date,
              content: item.content,
            },
          }}
        >
          <div
            key={index}
            className='flex my-[30px] border-2 border-color-[#D6D6D6] rounded-[10px] hover:border-[#048848] hover:border-2 '
          >
            <div className='px-[100px] bg-[#6C6C6C] bordercolor-[#-D6D6D6] rounded-l-[10px]'>이미지칸</div>
            <div className='flex-col py-[30px] gap-[100px] mx-5'>
              <h2 className='text-[30px] font-bold mb-3'>{item.title}</h2>
              <p className='text-[#6B6B6B] mb-3 text-[22px]'>{item.content}</p>
              <p className='text-[#6B6B6B] text-[22px]'>{item.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;
