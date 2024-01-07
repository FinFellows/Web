'use client';
import Link from 'next/link';
// Education 컴포넌트
import React, { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart.svg';
import ModifiedGlasses_goldtori from '../../../public/icons/modifiedglasses_goldtori.svg';
import Heartclick from '@/public/icons/heartclick.svg';
import { insertText } from 'slate';
const Education = () => {
  const datas = require('@/public/data/dummydata.json');
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
  const handleHeartClick = (id: number) => {
    setHeartStates({
      ...heartStates,
      [id]: !heartStates[id],
    });
  };
  return (
    <div className='flex justify-start flex-wrap mx-[-500px] px-[205px] gap-[13px]'>
      {datas.map((data: any, id: number) => (
        <div key={id} className='flex-col w-[430px] border-2 border-color-[#EAEAEA] rounded-lg '>
          <Link
            key={id}
            href={{
              pathname: `/educations/${id}`,
              query: {
                id: data.id,
              },
            }}
          >
            <div className='flex-wrap flex h-[210px] bg-mainLevel300 hover:bg-mainLevel500'>
              <h2 className='text-[34px] text-typoTertiary font-bold p-[15px] flex-wrap mr-[170px]'>{data.title}</h2>
              <div className='absolute ml-[204px] mt-[40px]'>
                <ModifiedGlasses_goldtori width='240' hight='240' />
              </div>
            </div>
          </Link>
          <div className='flex bg-[#CDE7DA] h-92 p-10 pt-[20px] gap-[25px]'>
            <Link
              key={id}
              href={{
                pathname: `/learnWithUs/education`,
                query: {
                  id: data.id,
                },
              }}
            >
              <p className='w-[345px] text-typoPrimary'>{truncateText(data.content, 59)}</p>
            </Link>
            <div className='' onClick={() => handleHeartClick(id)}>
              {heartStates[id] ? <Heartclick /> : <Heartdefault />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
