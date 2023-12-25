'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Education from '../../components/molecules/Education';

const LearnWithUsPage: any = () => {
  const [selectedItem, setSelectedItem] = useState('education');
  const handleEducationClick = () => {
    setSelectedItem('education');
  };
  const handleNewsClick = () => {
    setSelectedItem('news');
  };

  return (
    <div>
      <button onClick={handleEducationClick}>금융 교육</button>
      <button onClick={handleNewsClick}>금융 뉴스</button>
      {selectedItem === 'education' && (
        <div>
          <Education />
        </div>
      )}
      {selectedItem === 'news' && <div>{/* 금융 뉴스를 표시하는 내용 */}</div>}
    </div>
  );
};

export default LearnWithUsPage;
