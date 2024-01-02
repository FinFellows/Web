'use client';
import Link from 'next/link';
// Education 컴포넌트
import React, { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart.svg';
import ModifiedGlasses_goldtori from '../../../public/icons/modifiedglasses_goldtori.svg';
import Heartclick from '@/public/icons/heartclick.svg';
const Education = () => {
  const [contents, setContents] = useState([
    {
      title: '자유 입출금 통장 알찬사용법',
      content:
        '자유 입출금 통장 이름 그대로 돈을 자유롭게 입금하고 출금할 수 있는 통장이야 자유 입출금 통장의 금리은행이고 이고 입니다.',
    },
    {
      title: '교육 콘텐츠 2',
      content:
        '자유 입출금 통장 이름 그대로 돈을 자유롭게 입금하고 출금할 수 있는 통장이야 자유 입출금 통장의 금리은행이고 이고 입니다.',
    },
    {
      title: '교육 콘텐츠 3',
      content:
        '자유 입출금 통장 이름 그대로 돈을 자유롭게 입금하고 출금할 수 있는 통장이야 자유 입출금 통장의 금리은행이고 이고 입니다.',
    },
    {
      title: '교 4',
      content: '자유 수 있',
    },
    {
      title: '교육 콘텐츠 5',
      content:
        '자유 입출금 통장 이름 그대로 돈을 자유롭게 입금하고 출금할 수 있는 통장이야 자유 입출금 통장의 금리은행이고 이고 입니다.',
    },
  ]);
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      let truncatedText = text.slice(0, maxLength) + '...';
      let modifiedText = truncatedText.slice(0, 29) + '\n' + truncatedText.slice(29);
      return modifiedText;
    }
  };
  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});
  const handleHeartClick = (index: number) => {
    setHeartStates({
      ...heartStates,
      [index]: !heartStates[index],
    });
  };
  return (
    <div className='flex justify-start flex-wrap mx-[-500px] px-[205px] gap-[13px]'>
      {contents.map((item, index) => (
        <div key={index} className='flex-col w-[430px] border-2 border-color-[#EAEAEA] rounded-lg '>
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
            <div className='flex-wrap flex h-[210px] bg-[#68B891]'>
              <h2 className='text-[34px] text-[#FFFFFF] font-bold p-[15px] hover:bg-[#68B891] flex-wrap mr-[170px]'>
                {item.title}
              </h2>
              <div className='absolute ml-[204px] mt-[40px]'>
                <ModifiedGlasses_goldtori width='240' hight='240' />
              </div>
            </div>
          </Link>
          <div className='flex bg-[#CDE7DA] h-92 p-10 pt-[20px] gap-[25px]'>
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
              <p className='w-[345px]'>{truncateText(item.content, 59)}</p>
            </Link>
            <div className='' onClick={() => handleHeartClick(index)}>
              {heartStates[index] ? <Heartclick /> : <Heartdefault />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
