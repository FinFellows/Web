'use client';

import { useSearchParams } from 'next/navigation';

const PolicyHeadLine = () => {
  const serchParams = useSearchParams();
  const title = serchParams.get('title');
  return (
    <div>
      <div>
        <div className='flex-col my-[30px] border-2 border-color-[#D6D6D6] rounded-[20px] py-[60px] '>
          <div className='ml-5 text-3xl font-bold'>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default PolicyHeadLine;
