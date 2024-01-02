'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Education from '../../../components/molecules/Education';
import NewsList from '../../../components/molecules/NewsList';
import StudyToggle from '@/components/atom/toggle/StudyToggle';
const LearnWithUs: any = () => {
  const [activeToggle, setActiveToggle] = useState(2);
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
