'use client';

import PolicyHeadLine from '@/components/molecules/Policy/PolicyHeadLine';
import PolicyContent from '@/components/molecules/Policy/PolicyContent';
const Policy = () => {
  return (
    <div className='mx-[400px] my-[150px] flex-col'>
      <div>
        <PolicyHeadLine />
      </div>
      <div>
        <PolicyContent />
      </div>
    </div>
  );
};

export default Policy;
// 디자인 만든거
