'use client';
import React from 'react';
import Image from 'next/image';

import section8Logo from '@/public/icons/main/section8Logo.png';

import section8LogoM from '@/public/icons/main/section8LogoM.png';
import useFinMediaQuery from '@/hooks/custom/useFinMediaQuery';

const Section8 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen label-small tablet:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div>
        {isMobile ? (
          <div className='text-11 text-secondary dark:text-[#9e9e9e]'>
            <h1 className='mb-8'>우리는 명지대학교 프로젝트형 IT 동아리 DEPth의 금융원정대 팀입니다</h1>
            <Image src={section8LogoM} alt='section8LogoM' priority />
          </div>
        ) : (
          <div className='label-xl text-secondary dark:text-[#9e9e9e]'>
            <h1 className='mb-32'>우리는 명지대학교 프로젝트형 IT 동아리 DEPth의 금융원정대 팀입니다</h1>
            <Image src={section8Logo} alt='section8Logo' priority />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section8;
