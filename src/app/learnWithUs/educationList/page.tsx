'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Education from '../../../components/molecules/Education/EducationList';
import NewsList from '../../../components/molecules/News/NewsList';
import StudyToggle from '@/components/atom/toggle/StudyToggle';
const LearnWithUs: any = () => {
  const [activeToggle, setActiveToggle] = useState(1);
  const handleToggleChange = (toggleId: number) => {
    setActiveToggle(toggleId); // activeToggle 값 업데이트
  };

  return (
    <div className='mx-[600px] my-[80px]'>
      <StudyToggle activeToggle={activeToggle} toggleFn={handleToggleChange} />
      {activeToggle === 1 ? (
        <div className='flex-flow'>
          <Education />
        </div>
      ) : (
        <NewsList />
      )}
    </div>
  );
};

export default LearnWithUs;
