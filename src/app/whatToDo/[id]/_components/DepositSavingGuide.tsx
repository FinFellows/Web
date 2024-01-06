import React from 'react';
import Heart from '@/public/icons/heart.svg';
import HeartClick from '@/public/icons/heartclick.svg';

type TDepositSavingGuideProps = {
  size: 'Large' | 'Small';
  isHeart: boolean;
  productName: string;
  bankName: string;
  maxInterestRate: string;
  interestRate: string;
  onHeartClick: () => void;
};

const DepositSavingGuide: React.FC<TDepositSavingGuideProps> = ({
  isHeart,
  productName,
  bankName,
  maxInterestRate,
  interestRate,
  onHeartClick,
  size,
}) => {
  return size === 'Large' ? (
    <div className='flex w-855 px-33 py-40 justify-between items-center rounded-20 border-2 border-border02 bg-secondary'>
      <div className='flex flex-row items-center'>
        <div className='w-70 h-70 rounded-13 bg-imageBase'></div>
        <div className='ml-19'>
          <div className='heading-xl text-typoPrimary'>{productName}</div>
          <div className='paragraph-large text-typoPrimary'>{bankName}</div>
        </div>
      </div>
      <div className='flex items-center'>
        <div>
          <div className='mb-16 heading-medium text-typoSecondary'>최고</div>
          <div className='label-large text-main'>연 {maxInterestRate}%</div>
        </div>
        <div className='h-70 mx-15 border-l-1 border-border02'></div>
        <div>
          <div className='mb-16 heading-medium text-typoSecondary'>기본</div>
          <div className='label-large text-main'>연 {interestRate}%</div>
        </div>
        <button className='ml-60' onClick={onHeartClick}>
          {isHeart ? <Heart className='w-37 h-37' /> : <HeartClick className='w-37 h-37' />}
        </button>
      </div>
    </div>
  ) : (
    <div className='flex w-342 px-13 py-17 justify-between items-center rounded-8 border-1 border-border02 bg-secondary'>
      <div className='flex flex-row items-center'>
        <div className='w-35 h-35 rounded-13 bg-imageBase'></div>
        <div className='ml-7'>
          <div className='heading-small text-typoPrimary'>{productName}</div>
          <div className='paragraph-small text-typoPrimary'>{bankName}</div>
        </div>
      </div>
      <div className='flex items-center'>
        <div>
          <div className='mb-4 paragraph-small text-typoSecondary'>최고</div>
          <div className='label-small text-main'>연 {maxInterestRate}%</div>
        </div>
        <div className='h-35 mx-8 border-l-1 border-border02'></div>
        <div>
          <div className='mb-4 paragraph-small text-typoSecondary'>기본</div>
          <div className='label-small text-main'>연 {interestRate}%</div>
        </div>
        <button className='ml-17' onClick={onHeartClick}>
          {isHeart ? <Heart className='w-25 h-25' /> : <HeartClick className='w-25 h-25' />}
        </button>
      </div>
    </div>
  );
};

export default DepositSavingGuide;