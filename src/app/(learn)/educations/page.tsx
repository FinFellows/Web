'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Education from '@/components/molecules/Education/EducationList';
import NewsList from '@/components/molecules/News/NewsList';
import StudyToggle2 from '@/components/atom/toggle/StudyToggle2';

const Educations: any = () => {
  const [activeToggle, setActiveToggle] = useState(1);

  const handleToggleChange = (toggleId: number) => {
    setActiveToggle(toggleId); // activeToggle 값 업데이트
  };

  return (
    <div className='w-auto h-full flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center '>
        <div className=''>
          <StudyToggle2 activeToggle={activeToggle} toggleFn={handleToggleChange} href={''} />
        </div>
        {activeToggle === 0 ? (
          <div className=''>
            <Education />
          </div>
        ) : (
          <NewsList />
        )}
      </div>
    </div>
  );
};

export default Educations;
