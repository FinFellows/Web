'use client';
import React from 'react';
import Policy from '@/components/molecules/Policy/Policy';
import SearchFieldForPolicy from '@/components/molecules/SearchFieldForPolicy';
const ThankYouPage = () => {
  const onSearch = (searchTerm: string) => {
    alert(`검색어: ${searchTerm}`);
  };
  return (
    <div className=' mx-[300px] my-[130px]'>
      <div className=''></div>
      <div>
        <Policy></Policy>
      </div>
    </div>
  );
};

export default ThankYouPage;
