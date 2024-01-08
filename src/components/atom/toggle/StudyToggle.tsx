import React from 'react';

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
      case 1:
        return 'left-0';
      case 2:
        return 'right-0';
      default:
        return '';
    }
  };

  const handleToggleClick = (value: number) => {
    toggleFn(value); // 클릭된 토글의 값을 전달
  };

  return (
    <div className='mb-[40px] flex relative items-center ml-[-20px] w-307 h-50 bg-border01 rounded-[43.346px]'>
      <div
        className={`absolute  w-158 h-54 bg-main rounded-[43.346px] transition-all ${getBackgroundPositionClass(
          activeToggle,
        )}`}
      >
        {toggleOptions.map(({ label, value, href }) => (
          <button
            key={value}
            className={`flex-1 text-typoSecondary z-toggle h-50 font-teneda text-26 font-extrabold pt-6 ${
              activeToggle === value ? 'text-typoTertiary' : ''
            }`}
            onClick={() => handleToggleClick(value)} // 클릭 이벤트 핸들러 수정
          >
            <Link href={href}>{label}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudyToggle;
