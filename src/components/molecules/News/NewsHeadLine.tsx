'use client';
import Heartclick from '@/public/icons/heartclick.svg';
import { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart.svg';
import { useSearchParams } from 'next/navigation';
import Glasses_goldtorihalf from '../../../public/icons/glasses_goldtorihalf.svg';
type TNewsHeadLineProps = {
  title: string;
  date: string;
};
const NewsHeadLine: React.FC<TNewsHeadLineProps> = ({ title, date }) => {
  const [isHeartClick, setIsHeartClick] = useState(false);
  const handleClick = () => {
    setIsHeartClick(!isHeartClick);
  };
  return (
    <div>
      <div>
        <div className='ml-[720px] my-[-32px]'>
          <Glasses_goldtorihalf width='178' hight='153'/>
        </div>
        <div className='flex-col my-[30px] border-2 border-color-[#D6D6D6] rounded-[20px] py-[60px] w-[885px]'>
          <div className='w-[650px] px-[20px]'>
            <div className='ml-5 text-3xl font-bold'>{title}</div>
            <div className='ml-5 text-lg	'>{date}</div>
          </div>
          <p className='z-5 mt-[-50px] ml-[800px]'>
            {isHeartClick ? <Heartclick onClick={handleClick} /> : <Heartdefault onClick={handleClick} />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadLine;
