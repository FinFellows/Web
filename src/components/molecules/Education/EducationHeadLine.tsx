'use client';

import { useSearchParams } from 'next/navigation';
import Heartdefault from '../../../public/icons/grayheart.svg';
import Glasses_goldtorihalf from '../../../public/icons/glasses_goldtorihalf.svg';
import Heartclick from '@/public/icons/heartclick.svg';
import { useState } from 'react';
type TEducationHeadLineProps = {
  title: string;
};
const EducationHeadLine: React.FC<TEducationHeadLineProps> = ({ title }) => {
  const [isHeartClick, setIsHeartClick] = useState(false);
  const handleClick = () => {
    setIsHeartClick(!isHeartClick);
  };
  return (
    <div className=''>
        <div className='ml-[675px] my-[-32px]'>
          <Glasses_goldtorihalf width='178' hight='153'/>
        </div>
        <div className='flex my-[30px] border-2 w-[855px] border-color-[#D6D6D6] rounded-[20px] py-[50px] z-0'>
          <div className='px-[20px] heading-xl  z-5 font-bold w-[730px]'>{title}</div>
          {/* isHeartClick 상태에 따라 보여줄 아이콘 선택 */}
          <p className='z-5 ml-50'>
            {isHeartClick ? <Heartclick onClick={handleClick} /> : <Heartdefault onClick={handleClick} />}
          </p>
        </div>
    </div>
  );
};

export default EducationHeadLine;

// ml-[40px] mr-[200px]
// ml-[70px]
