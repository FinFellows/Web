'use client';

import Login from '@/components/organisms/modal/Login';
import BackDrop from '@/components/organisms/modal/backdrop';
import ModalView from '@/components/organisms/modal/modalView';
import LOCALHOST_KEYS from '@/constants/localhostKeys';
import { KAKAO_REDIRECT_URI_DEPLOY, KAKAO_REDIRECT_URI_DEVELOPMENT } from '@/constants/redirectUri';
import useUser from '@/hooks/useUser';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';

// 로그인이 필요한 페이지에 사용
export default function WithLoginModal({
  children,
  closeFn,
}: {
  children?: React.ReactNode;
  closeFn?: () => void;
}): JSX.Element | null {
  const { user, isLoading, isError } = useUser();
  const [showModal, setShowModal] = useState(true);
  const pathname = usePathname();

  // 카카오 로그인 띄우기
  const loginFn = () => {
    // const redirectUri =
    //   process.env.NODE_ENV === 'development' ? KAKAO_REDIRECT_URI_DEVELOPMENT : KAKAO_REDIRECT_URI_DEPLOY;
    const redirectUri = 'https://api.finfellows.co.kr/oauth2/authorization/kakao';
    console.log(redirectUri);
    window.location.href = redirectUri;
  };

  // const loginFn = () => {
  //   const redirectUri = 'https://api.finfellows.co.kr/oauth2/authorization/kakao';
  //   window.location.href = redirectUri;x
  // };

  const handleClose = () => {
    setShowModal(false);
    closeFn && closeFn();
  };

  useEffect(() => {
    if (isError) {
      localStorage.setItem(LOCALHOST_KEYS.redirectUrl, pathname);
    }
  }, [pathname, isError]);

  if (user) return <>{children}</>;

  if (isError && showModal) {
    return (
      <>
        <BackDrop>
          <ModalView>
            <Login loginFn={loginFn} closeFn={handleClose} />
          </ModalView>
        </BackDrop>
        <Script src='https://api.finfellows.co.kr/oauth2/authorization/kakao' />
      </>
    );
  }
  return null;
}
