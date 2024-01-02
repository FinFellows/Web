'use client';
import Heartclick from '@/public/icons/heartclick.svg';
import { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart.svg';
import { useSearchParams } from 'next/navigation';
import Glasses_goldtorihalf from '../../../public/icons/glasses_goldtorihalf.svg';
const NewsHeadLine = () => {
  const serchParams = useSearchParams();
  const title = serchParams.get('title');
  const date = serchParams.get('date');
  const [isHeartClick, setIsHeartClick] = useState(false);
  const handleClick = () => {
    setIsHeartClick(!isHeartClick);
  };
  return (
    <div>
      <div>
        <div className='w-[160px] h-[200px] ml-[570px] absolute my-[-103px]'>
          <Glasses_goldtorihalf />
        </div>
        <div className='flex-col my-[30px] border-2 border-color-[#D6D6D6] rounded-[20px] py-[60px] '>
          <div className='w-[650px] px-[20px]'>
            <div className='ml-5 text-3xl font-bold'>{title}</div>
            <div className='ml-5 text-lg	'>{date}</div>
          </div>
          <p className='z-10 absolute mt-[-50px] ml-[640px]'>
            {isHeartClick ? <Heartclick onClick={handleClick} /> : <Heartdefault onClick={handleClick} />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadLine;
