import React from 'react';
import BankAllBtn from '@/components/atom/button/BankAllBtn';
import BankIconBtn from '@/components/atom/button/BankIconBtn';
import Plus from '@/public/icons/plus.svg';

type TRopeProps = {
  allBtnClick: boolean;
  onAllClickBank: () => void;
  selectedBanks: string[];
  bankInfo: string[];
  onClickBank: (bank: string) => void;
};

const Rope: React.FC<TRopeProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  allBtnClick,
  onAllClickBank,
  selectedBanks,
  bankInfo,
  onClickBank,
  ...props
}) => {
  return (
    <div className='flex items-center w-342 px-12 py-15 bg-secondary border-2 rounded-10 border-border01 tablet:w-438 tablet:px-15 tablet:py-18 tablet:rounded-12 desktop:w-855 desktop:px-16 desktop:py-20 desktop:rounded-20'>
      <BankAllBtn isOn={allBtnClick} onClick={() => onAllClickBank()} />
      <div className='h-75 border-l-2 border-border04 ml-16 mr-4 tablet:h-96 tablet:ml-15 tablet:mr-5 desktop:h-100 desktop:ml-16 desktop:mr-6'></div>
      <div className='flex overflow-x-scroll scrollbar-hide w-140 ml-10 tablet:ml-12 tablet:w-183 desktop:w-590 desktop:ml-10'>
        {bankInfo.map((bank, index) => (
          <BankIconBtn
            key={index}
            styles='mr-10 tablet:mr-12 desktop:mr-10'
            isOn={selectedBanks.includes(bank)}
            text={bank}
            onClick={() => onClickBank(bank)}
          />
        ))}
      </div>
      <div className='h-75 border-l-2 border-border04 tablet:h-96 desktop:h-100'></div>
      <button {...props} className='flex flex-col justify-center items-center pl-19 tablet:pl-28 desktop:pl-38'>
        <Plus className='w-29 h-29 tablet:w-37 tablet:h-37 desktop:w-39 desktop:h-39' />
        <div className='text-border04 label-medium tablet:label-large desktop:label-medium'>더보기</div>
      </button>
    </div>
  );
};

export default Rope;
