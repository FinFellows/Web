'use client';

import { useSearchParams } from 'next/navigation';
import Heartdefault from '../../../public/icons/grayheart.svg';
import Default_goldtoriv2 from '../../../public/icons/default_goldtoriv2.svg';
import Heartclick from '@/public/icons/heartclick.svg';
import { useState } from 'react';
type TPolicyHeadLineProps = {
  title: string;
  content: string;
};
const PolicyHeadLine: React.FC<TPolicyHeadLineProps> = ({ title, content }) => {
  const [isHeartClick, setIsHeartClick] = useState(false);
  const handleClick = () => {
    setIsHeartClick(!isHeartClick);
  };
  const formattedContent = content && content.length > 52 ? `${content.slice(0, 52)}\n${content.slice(52)}` : content;
  return (
    <div>
      <div>
        <div className='ml-[630px] my-[-32px]'>
          <Default_goldtoriv2 width='197' hight='144'/>
        </div>
        <div className='flex my-[30px] mx-[-50px] border-2 border-color-[#D6D6D6] rounded-[20px] py-[50px] w-[885px] z-0'>
          <div className='flex-col'>
            <div className='px-[20px] heading-xl  z-5 font-bold w-[650px]'>
              {title}
              <div className='label-medium p-5 ' style={{ whiteSpace: 'pre-line' }}>
                {formattedContent}
              </div>
            </div>
            <p className='z-10 absolute mt-[-70px] ml-[760px]'>
              {isHeartClick ? <Heartclick onClick={handleClick} /> : <Heartdefault onClick={handleClick} />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyHeadLine;
