'use client';
import Link from 'next/link';
// Education 컴포넌트
import React, { useState } from 'react';

const Education = () => {
  const [contents, setContents] = useState([
    {
      title: '자유 입출금 통장 알찬사용법',
      content:
        '자유 입출금 통장 이름 그대로 돈을 자유롭게 입금하고 출금할 수 있는 통장이야 자유 입출금 통장의 금리은행이고 이고 입니다.',
    },
    {
      title: '교육 콘텐츠 2',
      content: '교육 콘텐츠 내용 2',
    },
    {
      title: '교육 콘텐츠 3',
      content: '교육 콘텐츠 내용 3',
    },
    {
      title: '교육 콘텐츠 4',
      content: '교육 콘텐츠 내용 4',
    },
    {
      title: '교육 콘텐츠 5',
      content: '교육 콘텐츠 내용 5',
    },
  ]);
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  };
  return (
    <div className='flex-col'>
      {contents.map((item, index) => (
        <Link
          key={index}
          href={{
            pathname: `/learnWithUs/education`,
            query: {
              title: item.title,
              content: item.content,
            },
          }}
        >
          <div key={index} className='my-[30px] px-[400px] border-2 border-color-[#EAEAEA] rounded-lg'>
            <h2 className='text-l font-bold bg-[#D6D6D6] p-4 hover:bg-[#68B891]'>{item.title}</h2>
            <p className='mb-[80px] text-l bg-[#FFFFFF] p-4'>{truncateText(item.content, 59)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Education;
