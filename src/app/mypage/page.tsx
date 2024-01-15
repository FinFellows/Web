'use client';
import React, { useState } from 'react';
import StudyToggle from '@/components/atom/toggle/StudyToggle';
import Setting from '@/components/templates/mypage/setting';
import Favorites from '@/components/templates/mypage/favorites';

import { KAKAO_REDIRECT_URI_DEPLOY, KAKAO_REDIRECT_URI_DEVELOPMENT } from '@/constants/redirectUri';
import BackDrop from '@/components/organisms/modal/backdrop';
import ModalView from '@/components/organisms/modal/modalView';
import Login from '@/components/organisms/modal/Login';
import Script from 'next/script';
import useUser from '@/hooks/useUser';
import OnlyUser from '@/components/templates/login/OnlyUser';

const Page = () => {
  const [toggle, setToggle] = useState(0);

  const toggleFn = (toggleId: number) => {
    setToggle(toggleId);
  };

  return (
    <OnlyUser>
      <div className='flex flex-col items-center justify-start min-h-screen min-w-full'>
        <div className=''>
          <StudyToggle activeToggle={toggle} toggleFn={toggleFn} />
        </div>
        <div className='mt-63'>{toggle === 0 ? <Favorites /> : <Setting />}</div>
      </div>
    </OnlyUser>
  );
};

export default Page;
