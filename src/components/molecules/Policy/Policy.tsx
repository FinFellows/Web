// Policy 컴포넌트
'use client';
import Link from 'next/link';

import React, { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart.svg';
import Heartclick from '@/public/icons/heartclick.svg';
import SearchFieldForPolicy from '../SearchFieldForPolicy';
import Default_goldtoriv1 from '@/public/icons/default_goldtoriv1.svg';
const Policy = () => {
  const datas = require('@/public/data/dummyPolicy.json');
  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});
  const handleHeartClick = (index: number) => {
    setHeartStates({
      ...heartStates,
      [index]: !heartStates[index],
    });
  };
  // 검색어로 필터링된 컨텐츠 가져오기
  const [searchQuery, setSearchQuery] = useState('');
  const filteredContents = datas.filter((item: { title: string | string[] }) => item.title.includes(searchQuery));
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      let truncatedText = text.slice(0, maxLength) + '...';
      let modifiedText = truncatedText.slice(0, 29) + '\n' + truncatedText.slice(29);
      return modifiedText;
    }
  };
  return (
    <div className='flex-col my-[30px]'>
      <SearchFieldForPolicy searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='border-b-[3px] border-black pb-3 heading-large font-bold ml-6 w-[884px]'>청년 금융 정책</div>
      <div className='flex justify-start flex-wrap mx-[-200px] px-[205px] gap-[28px] my-15'>
        {filteredContents.map((item: any, id: number) => (
          <div key={id} className='flex-col w-[430px] h-[300px] border-2 border-color-[#EAEAEA] rounded-lg '>
            <Link
              key={id}
              href={{
                pathname: `/policies/${id}`,
                query: {
                  id: item.id,
                  // title: item.title,
                  // content: item.content,
                  // policyContents: item.policyContents,
                  // operatingPeriod: item.operatingPeriod,
                  // applicationPeriod: item.applicationPeriod,
                  // supportscale: item.supportscale,
                  // age: item.age,
                  // residenceAndIncome: item.residenceAndIncome,
                  // academicAbillity: item.academicAbillity,
                  // major: item.major,
                  // employmentStatus: item.employmentStatus,
                  // specializedFiedl: item.specializedFiedl,
                  // additionalClues: item.additionalClues,
                  // restiricitionsOnParticipation: item.restiricitionsOnParticipation,
                  // procedures: item.procedures,
                  // audit: item.audit,
                  // site: item.site,
                  // document: item.document,
                },
              }}
            >
              <div className='flex-wrap flex rounded-t-lg h-208 bg-mainLevel300 hover:bg-mainLevel500'>
                <h2 className='text-[34px] text-typoTertiary font-bold p-[15px] flex-wrap mr-[170px]'>{item.title}</h2>
                <div className='absolute ml-[230px] mt-[44px]'>
                  <Default_goldtoriv1 width='215' hight='215' />
                </div>
              </div>
            </Link>
            <div className='flex bg-mainLevel100 h-90 p-6 pt-[20px] gap-[25px] rounded-b-lg '>
              <Link
                key={id}
                href={{
                  pathname: `/learnWithUs/education`,
                  query: {
                    title: item.title,
                    content: item.content,
                  },
                }}
              >
                <p className='w-[345px] rounded-b-lg text-typoPrimary'>{truncateText(item.content, 59)}</p>
              </Link>
              <div className='' onClick={() => handleHeartClick(id)}>
                {heartStates[id] ? <Heartclick /> : <Heartdefault />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
