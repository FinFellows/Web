'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Education from '../../components/molecules/Education';
import NewsList from '../../components/molecules/NewsList';

const LearnWithUsPage: any = () => {
  const [selectedItem, setSelectedItem] = useState('education');
  const handleEducationClick = () => {
    setSelectedItem('education');
  };
  const handleNewsClick = () => {
    setSelectedItem('news');
  };

  return (
    <div className='mx-[500px] my-[100px]'>
      <div className='items-center justify-center'>
        <button onClick={handleEducationClick}>금융 교육</button>
        <button onClick={handleNewsClick}>금융 뉴스</button>
      </div>
      {selectedItem === 'education' && (
        <div>
          <Education />
        </div>
      )}
      {selectedItem === 'news' && (
        <div>
          <NewsList />
        </div>
      )}
    </div>
  );
};

export default LearnWithUsPage;
