import React from 'react';

type THeaderText = {
  text: string;
};

const HeaderText: React.FC<THeaderText> = ({ text }) => {
  return <div className='flex justify-center items-center bg-secondary w-120 h-47 gap-10 text-primary font-teneda text-18 font-extrabold pt-6 leading-27'>{text}</div>;
};

export default HeaderText;
