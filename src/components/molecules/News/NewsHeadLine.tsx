'use client';
import Heartclick from '@/public/icons/clickheart2.svg';
import { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import { useSearchParams } from 'next/navigation';
import Glasses_goldtorihalf from '../../../public/icons/glasses_goldtorihalf.svg';
type TNewsHeadLineProps = {
  title: string;
  created_at: string;
  bookmarked: boolean;
  onHeartClick: () => void;
};
const NewsHeadLine: React.FC<TNewsHeadLineProps> = ({ title, created_at, bookmarked, onHeartClick }) => {
  return (
    <div className=''>
      <div>
        <div className='w-68 h-81 ml-[260px] mt-[-5px] tablet:w-87 tablet:h-104 tablet:ml-[350px] desktop:w-178 desktop:h-153 desktop:ml-[680px]'>
          <Glasses_goldtorihalf />
        </div>
        <div className='w-342 flex-col py-20 mb-10 mt-[-37px] border-2 border-border02 rounded-[20px] tablet:w-[438px] tablet:mt-[-48px] desktop:w-[855px] desktop:mt-[-38px] dark:border-[#383838] dark:bg-[#343434] dark:text-[#D6D6D6]'>
          <div className='w-300 desktop:w-[800px] mb-20 px-10 tablet:p-20 tablet:w-300 tablet:mt-[-45px] desktop:pr-20'>
            <div className='ml-5 heading-medium font-bold typoPrimary tablet:heading-large desktop:heading-xxl '>
              {title}
            </div>
            <div className='ml-5 paragraph-small text-typoSecondary tablet:paragraph-medium desktop:paragraph-medium dark:text-[#D6D6D6)]'>
              {created_at}
            </div>
          </div>
          <p
            className='z-5 h-26 w-26 -mt-62 ml-[290px] tablet:w-33 tablet:h-33 tablet:ml-[380px] desktop:ml-[770px] desktop:w-37 desktop:h-37 '
            onClick={onHeartClick}
          >
            {bookmarked ? <Heartclick /> : <Heartdefault />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadLine;
