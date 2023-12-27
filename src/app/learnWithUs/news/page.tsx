'use client';

import { useSearchParams } from 'next/navigation';
import NewsHeadLine from '@/components/molecules/NewsHeadLine';
import NewsContent from '@/components/molecules/NewsContent';
const NewsPage = () => {
  return (
    <div className='mx-[500px] my-[100px] flex-col'>
      <div>
        <NewsHeadLine />
      </div>
      <div>
        <NewsContent />
      </div>
    </div>
  );
};

export default NewsPage;
// 디자인 만든거
