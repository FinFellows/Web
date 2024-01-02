import React, { useState } from 'react';
import Search from '@/public/icons/search.svg';
interface Props {
  onSearch: (term: string) => void;
}

const SearchFieldForPolicy = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit} className='my-[40px] bg-[#FCFCFC] border-[2px] rounded-[10px] '>
      <div className='flex items-center'>
        <input
          className='w-[640px] px-[10px] h-[73px] text-left ml-4 bg-[#FCFCFC]  outline-none'
          type='text'
          placeholder='궁금한 정책을 검색해보세요'
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='w-[37px] h-[37px] ' type='submit'>
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchFieldForPolicy;
