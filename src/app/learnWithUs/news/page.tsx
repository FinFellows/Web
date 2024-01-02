'use client';

import NewsHeadLine from '@/components/molecules/News/NewsHeadLine';
import NewsContent from '@/components/molecules/News/NewsContent';
const News = () => {
  return (
    <div className='mx-[400px] my-[150px] flex-col'>
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
