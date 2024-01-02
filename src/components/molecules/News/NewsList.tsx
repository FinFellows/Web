// NewsList 컴포넌트
'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Heartdefault from '../../../public/icons/grayheart.svg';
import Heartclick from '@/public/icons/heartclick.svg';
import Link from 'next/link';

const NewsList = () => {
  const [contents, setContents] = useState([
    {
      title: '자유 입출금 통장 알찬사용법',
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
  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});
  const handleHeartClick = (index: number) => {
    setHeartStates({
      ...heartStates,
      [index]: !heartStates[index],
    });
  };
  return (
    <div>
      {contents.map((item, index) => (
        <div
          key={index}
          className='flex items-start w-[700px] h-[130px] my-[20px] ml-[-200px] border-2 border-color-[#D6D6D6] rounded-[10px] hover:border-[#048848] hover:border-2 '
        >
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
            <div className=' bg-[#6C6C6C] w-[150px] h-[130px] bordercolor-[#-D6D6D6] rounded-l-[10px]'>이미지칸</div>
          </Link>
          <div>
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
              <div className='flex-col'>
                <h2 className='text-[28px] font-bold px-[20px] mt-[10px]'>{item.title}</h2>
                <p className='text-[#6B6B6B] text-[20px] px-[20px]'>{item.content}</p>
                <p className='text-[#6B6B6B] text-[20px] px-[20px]'>{item.date}</p>
              </div>
            </Link>
            <p className='z-10 mt-[-65px] ml-[480px]' onClick={() => handleHeartClick(index)}>
              {heartStates[index] ? <Heartclick /> : <Heartdefault />}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
