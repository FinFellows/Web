'use client';
import React from 'react';
import Image from 'next/image';

import section5Mock from '@/public/icons/main/section5Mock.png';
import section5Logo from '@/public/icons/main/section5Logo.png';
import section5MockM from '@/public/icons/main/section5MockM.png';
import section5LogoM from '@/public/icons/main/section5LogoM.png';
import useFinMediaQuery from '@/hooks/custom/useFinMediaQuery';

const Section5 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();

  return (
    <div className='flex flex-col items-center justify-center tablet:mt-190 min-h-screen label-small tablet:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div>
        {isMobile ? (
          <div className='mr-121 w-full flex flex-col   items-stretch '>
            <div className='flex flex-col items-end  mr-24'>
              <div className=' font-teneda flex mb-30'>
                <h1 className=' text-40 '>금융, 배우자</h1>
                <h1 className=' text-70 text-main rotate-12 '>!</h1>
              </div>
              <h1 className='text-12'>낯설고 어렵기만 한 금융을 쉽고 친근하게 배울 수 있습니다</h1>
              <h1 className='text-12'>각종 금융 기초 상식과 최신 금융 뉴스를 제공합니다</h1>
              <Image className='mt-36' src={section5MockM} alt='section5MockM' priority />
            </div>
            <Image className='mr-auto object-cover ' src={section5LogoM} alt='section5LogoM' priority />
          </div>
        ) : (
          <div className=' mx-24 flex  justify-center items-end box-border'>
            <Image
              width={800}
              height={700}
              className='object-contain '
              src={section5Logo}
              alt='section5Logo'
              priority
            />
            <div className='  flex flex-col items-end'>
              <div className=' font-teneda flex mb-30'>
                <h1 className=' text-90 '>금융, 배우자</h1>
                <h1 className=' text-160 text-main rotate-12 '>!</h1>
              </div>
              <h1 className='label-xl'>낯설고 어렵기만 한 금융을 쉽고 친근하게 배울 수 있습니다</h1>
              <h1 className='label-xl'>각종 금융 기초 상식과 최신 금융 뉴스를 제공합니다</h1>
              <Image className='mt-95' src={section5Mock} alt='section5Mock' priority />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section5;
