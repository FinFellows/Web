'use client';
import React from 'react';
import Policy from '@/components/molecules/Policy';
import SearchFieldForPolicy from '@/components/molecules/SearchFieldForPolicy';
const ThankYouPage = () => {
  const onSearch = (searchTerm: string) => {
    alert(`검색어: ${searchTerm}`);
  };
  return (
    <div className=' mx-[400px]'>
      <div className=''>
        <SearchFieldForPolicy onSearch={onSearch} />
      </div>
      <div className='border-b-[2px] border-color-[#D6D6D6] pb-3 text-2xl font-bold'>청년 금융 정책</div>
      <div>
        <Policy></Policy>
      </div>
    </div>
  );
};

export default ThankYouPage;
