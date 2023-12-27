'use client';
import React, { useState } from 'react';

const SearchFieldForPolicy = ({ onSearch }: { onSearch: any }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='mx-[500px] my-[40px] border-[2px] rounded-[10px]'>
      <input
        className='w-[1000px] h-[73px] text-left ml-4'
        type='text'
        placeholder='궁금한 정책을 검색해보세요'
        value={searchTerm}
        onChange={handleChange}
      />
      <button type='submit'>검색</button>
    </form>
  );
};

export default SearchFieldForPolicy;
