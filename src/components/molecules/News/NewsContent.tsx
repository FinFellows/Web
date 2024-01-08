'use client';
import { useSearchParams } from 'next/navigation';
type TNewsContentProps = {
  content: string;
};
const NewsContent: React.FC<TNewsContentProps> = ({ content }) => {
  return (
    <div>
      <div>
        <div className='border-2 border-color-[#D6D6D6] rounded-[20px] py-[350px] w-885'>
          <div className='px-[20px] mt-[-330px]'>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
