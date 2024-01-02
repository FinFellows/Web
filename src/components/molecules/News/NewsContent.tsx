'use client';
import { useSearchParams } from 'next/navigation';

const NewsContent = () => {
  const serchParams = useSearchParams();
  const content = serchParams.get('content');
  console.log(content);
  return (
    <div>
      <div>
        <div className='border-2 border-color-[#D6D6D6] rounded-[20px] py-[350px]'>
          <div className='px-[20px] mt-[-330px]'>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
