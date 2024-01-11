'use client';
import React from 'react';
import Image from 'next/image';

import section6Mock from '@/public/icons/main/section6Mock.png';
import section6Logo from '@/public/icons/main/section6Logo.png';
import section6MockM from '@/public/icons/main/section6MockM.png';
import section6LogoM from '@/public/icons/main/section6LogoM.png';
import useFinMediaQuery from '@/hooks/custom/useFinMediaQuery';

const Section6 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  return (
    <div className='flex flex-col items-center justify-center tablet:mt-190 min-h-screen label-small tablet:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div>
        {isMobile ? (
          <div className='mr-121 w-full flex flex-col '>
            <div className=' text-left  ml-24'>
              <div className=' font-teneda flex mb-30'>
                <h1 className=' text-40 '>금융, 고마워</h1>
                <h1 className=' text-70 text-main rotate-12 '>~</h1>
              </div>
              <h1 className='text-12'>모르면 손해보는 청년금융정책 정보를 안내해드립니다</h1>
              <h1 className='text-12'>여러분에게 꼭 맞는 정책을 찾아 도움을 받아보실 수 있습니다</h1>
              <Image className='mt-36' src={section6MockM} alt='section6MockM' priority />
            </div>
            <Image className='ml-auto object-contain ' src={section6LogoM} alt='section6LogoM' priority />
          </div>
        ) : (
          <div className='mx-24 flex justify-center box-border items-end'>
            <div className=' flex flex-col items-start justify-end'>
              <div className=' font-teneda flex mb-30'>
                <h1 className=' text-90 '>금융, 고마워</h1>
                <h1 className=' text-160 text-main rotate-12 '>~</h1>
              </div>
              <h1 className='label-xl'>모르면 손해보는 청년금융정책 정보를 안내해드립니다</h1>
              <h1 className='label-xl'>여러분에게 꼭 맞는 정책을 찾아 도움을 받아보실 수 있습니다</h1>
              <Image className='mt-95' src={section6Mock} alt='section6Mock' priority />
            </div>
            <Image
              width={800}
              height={700}
              className='object-contain '
              src={section6Logo}
              alt='section6Logo'
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section6;
