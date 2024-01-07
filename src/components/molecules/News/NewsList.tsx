// NewsList 컴포넌트
'use client';
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart.svg';
import Heartclick from '@/public/icons/heartclick.svg';
import Link from 'next/link';

const NewsList = () => {
  const datas = require('@/public/data/dummydata.json');

  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});
  const handleHeartClick = (id: number) => {
    setHeartStates({
      ...heartStates,
      [id]: !heartStates[id],
    });
  };
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '....';
    } else {
      return text;
    }
  };
  return (
    <div>
      {datas?.map((data: any, id: number) => (
        <div
          key={id}
          className='flex items-start w-[885px] h-[167px] my-[20px] ml-[-300px] border-2 border-color-[#D6D6D6] rounded-[10px] hover:border-main hover:border-2 '
        >
          <Link
            key={id}
            href={{
              pathname: `news/${id}`,
              query: {
                id: data.id,
              },
            }}
          >
            <div className=' bg-[#6C6C6C] w-[167px] h-[167px] bordercolor-[#-D6D6D6] rounded-l-[10px]'>이미지칸</div>
          </Link>
          <div>
            <Link
              key={id}
              href={{
                pathname: `/news/${id}`,
                query: {
                  id: data.id,
                },
              }}
            >
              <div className='flex-col bg-secondary'>
                <h2 className='heading-xl font-bold px-[20px] mt-[20px]'>{data.title}</h2>
                <p className='text-typoSecondary paragraph-large px-[20px]'> {truncateText(data.content, 28)}</p>
                <p className='text-typoSecondary paragraph-large px-[20px]'>{data.date}</p>
              </div>
            </Link>
            <p className='z-10 mt-[-65px] ml-[640px]' onClick={() => handleHeartClick(id)}>
              {heartStates[id] ? <Heartclick /> : <Heartdefault />}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
