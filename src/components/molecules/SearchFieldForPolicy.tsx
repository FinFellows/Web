import React, { useState } from 'react';
import Search from '@/public/icons/search.svg';
const SearchFieldForPolicy = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}) => {
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 여기에 검색을 처리하는 로직을 추가할 수 있습니다.
    // 예를 들어, API 호출을 통해 검색 결과를 가져오는 등의 작업을 할 수 있습니다.
  };

  return (
    <form onSubmit={handleSearchSubmit} className='w-884 mx-[5px] my-[40px] bg-[#FCFCFC] border-[2px] rounded-[10px]'>
      <div className='flex items-center'>
        <input
          className='w-[800px] text-label-large px-[10px] h-[73px] text-left ml-4 bg-[#FCFCFC]  outline-none'
          type='text'
          placeholder='궁금한 정책을 검색해보세요'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='w-[37px] h-[37px]' type='submit'>
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchFieldForPolicy;
