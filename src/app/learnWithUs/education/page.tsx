'use client';

import EducationHeadLine from '@/components/molecules/EducationHeadLine';
import EducationContent from '@/components/molecules/EducationContent';
const Education = () => {
  return (
    <div className='mx-[400px] my-[150px] flex-col'>
      <div>
        <EducationHeadLine />
      </div>
      <div>
        <EducationContent />
      </div>
    </div>
  );
};

export default Education;
// 디자인 만든거
