'use client';
import React from 'react';
import Image from 'next/image';

import section7Mock from '@/public/icons/main/section7Mock.png';
import section7Logo from '@/public/icons/main/section7Logo.png';
import section7MockM from '@/public/icons/main/section7MockM.png';
import section7LogoM from '@/public/icons/main/section7LogoM.png';
import useFinMediaQuery from '@/hooks/custom/useFinMediaQuery';

const Section7 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  return (
    <div className='flex flex-col items-center justify-center tablet:mt-180 min-h-screen label-small tablet:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div>
        {isMobile ? (
          <div className='flex flex-col items-start'>
            <div className='mb-42 text-left'>
              <h1 className='text-20 font-teneda mb-10'>이외에도 궁금한 점이 있다면?</h1>
              <h2 className='text-12'>금토리를 클릭해 보세요</h2>
              <h2 className='text-12'>궁금한 금융상식을 채워드립니다</h2>
            </div>
            <div className='flex items-end'>
              <Image className='mr-50' src={section7MockM} alt='section7MockM' priority />
              <Image className='' src={section7LogoM} alt='section7LogoM' priority />
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center'>
            <div className='flex items-center mr-71'>
              <Image className='mr-66' src={section7Mock} alt='section7Mock' priority />
              <Image className='' src={section7Logo} alt='section7Logo' priority />
            </div>
            <div className='mb-42 text-left'>
              <h1 className='text-45 font-teneda mb-10'>이외에도 궁금한 점이 있다면?</h1>
              <h2 className='label-xl'>금토리를 클릭해 보세요</h2>
              <h2 className='label-xl'>궁금한 금융상식을 채워드립니다</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section7;
