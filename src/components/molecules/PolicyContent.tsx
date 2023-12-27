'use client';
import { useSearchParams } from 'next/navigation';

const PolicyContent = () => {
  const serchParams = useSearchParams();
  const content = serchParams.get('content');
  return (
    <div>
      <div>
        <div className='border-2 border-color-[#D6D6D6] rounded-[20px] py-[350px]'>
          <div className='ml-5 mt-[-330px]'>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default PolicyContent;
