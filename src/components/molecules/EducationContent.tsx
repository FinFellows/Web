'use client';
import { useSearchParams } from 'next/navigation';

const EducationContent = () => {
  const serchParams = useSearchParams();
  const content = serchParams.get('content');
  return (
    <div>
      <div>
        <div className='border-2 border-color-[#D6D6D6] rounded-[20px]  px-10 py-[330px]'>
          <div className='ml-5 mt-[-300px]'>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
