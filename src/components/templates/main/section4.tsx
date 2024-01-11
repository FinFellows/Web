'use client';
import React from 'react';
import Image from 'next/image';

import section4Mock from '@/public/icons/main/section4Mock.png';
import section4Logo from '@/public/icons/main/section4Logo.png';
import section4MockM from '@/public/icons/main/section4MockM.png';
import section4LogoM from '@/public/icons/main/section4LogoM.png';
import useFinMediaQuery from '@/hooks/custom/useFinMediaQuery';

const Section4 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();

  return (
    <div className='mt-100 tablet:mt-[450px] flex flex-col items-center justify-center min-h-screen label-small tablet:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div>
        {isMobile ? (
          <div className='mr-121 w-full flex flex-col '>
            <div className=' text-left'>
              <div className=' font-teneda flex mb-30'>
                <h1 className=' text-40 '>금융, 뭐하지</h1>
                <h1 className=' text-70 text-main rotate-12 '>?</h1>
              </div>
              <h1 className='text-12'>안전 자산에 속하는 예금, 적금, CMA를 조건별로</h1>
              <h1 className='text-12'>쉽게 이율을 비교할 수 있습니다</h1>
              <Image className='mt-36' src={section4MockM} alt='section4MockM' priority />
            </div>
            <Image className='ml-auto object-cover ' src={section4LogoM} alt='section4LogoM' priority />
          </div>
        ) : (
          <div className='mx-24 flex justify-center box-border items-end'>
            <div className=' flex flex-col items-start justify-end'>
              <div className=' font-teneda flex mb-30'>
                <h1 className=' text-90 '>금융, 뭐하지</h1>
                <h1 className=' text-160 text-main rotate-12 '>?</h1>
              </div>
              <h1 className='label-xl'>안전 자산에 속하는 예금, 적금, CMA를 조건별로</h1>
              <h1 className='label-xl'>쉽게 이율을 비교할 수 있습니다.</h1>
              <Image className='mt-95' src={section4Mock} alt='section4Mock' priority />
            </div>
            <Image
              width={900}
              height={800}
              className='object-contain '
              src={section4Logo}
              alt='section4Text'
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section4;
