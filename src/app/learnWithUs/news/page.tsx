'use client';

import NewsHeadLine from '@/components/molecules/NewsHeadLine';
import NewsContent from '@/components/molecules/NewsContent';
const News = () => {
  return (
    <div className='mx-[400px] my-[100px] flex-col'>
      <div>
        <NewsHeadLine />
      </div>
      <div>
        <NewsContent />
      </div>
    </div>
  );
};

export default News;
// 디자인 만든거
