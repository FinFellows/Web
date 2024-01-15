'use client';
import Link from 'next/link';
// Education 컴포넌트
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import ModifiedGlasses_goldtori from '../../../public/icons/modifiedglasses_goldtori.svg';
import Clickheart2 from '@/public/icons/clickheart2.svg';
import { getEducationsData } from '@/api/education/educationApi';
import Pagination from '@/components/molecules/pagination/Pagination';

export type TEducation = {
  id: number;
  title: string;
  content: string;
  bookmarked: boolean;
};

export type TEducationsApiResponse = {
  content: TEducation[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
const Education = () => {
  const [EducationData, setEducationData] = useState<TEducation[] | undefined>([]);

  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(0); //총 페이지 수

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
  const fetchData = async () => {
    try {
      const data = await getEducationsData(`size=8&page=${pageNum}`);
      if (data) {
        setPageTotalNum(data.totalPages);
        setEducationData(data.content);
      }
    } catch (error) {
      console.error('Error fetching bankListFetchData:', error);
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  return (
    <div className='desktop:py-39 tablet:py-26 py-20'>
      <div className='tablet:flex tablet:flex-wrap tablet:w-[430px] desktop:w-[890px] desktop:flex-wrap desktop:flex '>
        {EducationData?.map((i, index) => (
          <div
            key={i.id}
            className='flex-col tablet:ml-20 w-[336px] my-12 desktop:w-[425px] tablet:w-371 desktop:my-10 border-2 border-mainLevel100 border-color-[#EAEAEA] rounded-lg dark:border-[#383838]'
          >
            <Link
              key={i.id}
              href={{
                pathname: `/educations/${i.id}`,
              }}
            >
              <div className='flex-wrap  w-full flex h-[163px] tablet:h-180 desktop:h-[210px] bg-mainLevel300 border-mainLevel300 hover:bg-mainLevel500 dark:bg-[#383838] dark:hover:bg-[#6B6B6B]'>
                <h2 className='text-[26px] mr-[140px] tablet:text-[29px] tablet:p-20 desktop:text-[34px] text-typoTertiary font-bold p-10 desktop:p-[15px] flex-wrap desktop:mr-[170px]'>
                  {i.title}
                </h2>
                <div className='absolute w-168 h-135 ml-[170px] tablet:w-186 tablet:h-150 tablet:ml-[195px] tablet:mt-[48.5px] mt-[44.3px] desktop:ml-[220px] desktop:mt-[58px] desktop:w-216 desktop:h-173'>
                  <ModifiedGlasses_goldtori />
                </div>
              </div>
            </Link>
            <div className='flex bg-[#CDE7DA] h-[71px] tablet:h-79 desktop:h-92 p-10 pt-[25px] gap-[25px] dark:bg-[#343434] '>
              <Link
                key={i.id}
                href={{
                  pathname: `/education/${i.id}`,
                }}
              >
                <div className='w-[240px] desktop:w-[340px] tablet:w-[290px] text-typoPrimary text-[12px] tablet:text-[14px] desktop:text-[16px] desktop:paragraph-medium dark:text-[#D6D6D6]'>
                  {truncateText(i.content, 59)}
                </div>
              </Link>
              <div
                className='h-29 w-29 tablet:h-32 tablet:w-32 desktop:h-37 desktop:w-37'
                onClick={() => handleHeartClick(index)}
              >
                {heartStates[index] ? <Clickheart2 /> : <Heartdefault />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
    </div>
  );
};

export default Education;
