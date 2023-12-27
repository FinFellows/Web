'use client';

import EducationHeadLine from '@/components/molecules/EducationPage';
import EducationContent from '@/components/molecules/EducationContent';
const Education = () => {
  return (
    <div className='mx-[400px] my-[100px] flex-col'>
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
