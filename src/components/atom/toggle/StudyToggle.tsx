import EducationList from '@/components/molecules/Education/EducationList';
import React from 'react';
import NewsList from '@/components/molecules/News/NewsList';
import Link from 'next/link';
type TStudyToggleProps = {
  activeToggle: number;
  toggleFn: (toggleId: number) => void;
};

const StudyToggle: React.FC<TStudyToggleProps> = ({ activeToggle, toggleFn }) => {
  const toggleOptions = [
    { label: '금융교육', value: 1, href: 'educations' },
    { label: '금융뉴스', value: 2, href: 'news' },
  ];

  const getBackgroundPositionClass = (active: number) => {
    switch (active) {
      case 0:
        return 'transform translate-x-0 ';
      case 1:
        return 'transform translate-x-full';
      default:
        return '';
    }
  };

  const handleToggleClick = (value: number) => {
    toggleFn(value); // 클릭된 토글의 값을 전달
  };

  return (
    <div className='flex relative items-center  bg-border01 w-201 h-38 rounded-[32.5px] tablet:w-307 tablet:h-50 tablet:rounded-[43.346px]'>
      <div
        className={`absolute bg-main w-102 h-40 rounded-[32.5px] tablet:w-158  tablet:h-54  tablet:rounded-[43.346px] transition-all duration-300 ease-in-out ${getBackgroundPositionClass(
          activeToggle,
        )}`}
      ></div>
      {toggleOptions.map(({ label, value, href }) => (
        <button
          key={value}
          className={`flex-1  text-typoSecondary z-toggle h-50 font-teneda text-19 tablet:text-26 font-extrabold pt-6 transition-all duration-300 ease-in-out ${
            activeToggle === value ? 'text-typoTertiary' : ''
          }`}
          onClick={() => handleToggleClick(value)} // 클릭 이벤트 핸들러 수정
        >
          <Link href={href}>{label}</Link>
        </button>
      ))}
    </div>
  );
};

export default StudyToggle;
