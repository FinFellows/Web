'use client';
import React from 'react';
import Link from 'next/link';

const MenuItem = ({ menuItem, activeMenu, handleMenuHover, handleMenuLeave, pathname, ...props }: TMenuItemProps) => {
  const isCurrentPage =
    (menuItem.name === '서비스 소개' && (pathname === '/' || pathname === '/notice')) || // 서비스 소개, 공지사항 페이지
    (menuItem.subMenu &&
      menuItem.subMenu.some((subItem) =>
        subItem.href === '/' ? pathname === '/' : pathname.startsWith(subItem.href),
      ));
  return (
    <div
      {...props}
      className={
        ' tablet:mr-10 text-center text-black dark:text-dark-secondary transition-all relative active:text-main hover:text-main z-header'
      }
      onMouseEnter={() => handleMenuHover && handleMenuHover(menuItem.name)}
      onMouseLeave={handleMenuLeave && (() => handleMenuLeave())}
    >
      <Link
        className={`text-18 tablet:min-w-max whitespace-nowrap ${isCurrentPage ? 'text-main' : ''}`}
        href={menuItem.href}
      >
        {menuItem.name}
      </Link>
      {/* 서브 메뉴 */}
      {activeMenu === menuItem.name && menuItem.subMenu && (
        <ul className='hidden tablet:block shadow-lg rounded-tl-0 rounded-xl w-120 absolute  left-0 px-10 pt-10 pb-5 text-center font-pretendard bg-white'>
          {menuItem.subMenu.map((subItem) => (
            <li
              className=' mb-10  box-border flex-nowrap gap-10 text-16 text-primary font-semibold '
              key={subItem.name}
            >
              <Link href={subItem.href}>{subItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

type TMenuItemProps = {
  menuItem: {
    name: string;
    href: string;
    subMenu?: { name: string; href: string }[];
  };
  activeMenu: string | null;
  handleMenuHover?: (menuName: string) => void;
  handleMenuLeave?: () => void;
  pathname: string;
};

type TMenuItems = {
  name: string;
  href: string;
  subMenu?: TMenuItems[];
};

export const menuItems: TMenuItems[] = [
  {
    name: '서비스 소개',
    href: '/',
    subMenu: [
      { name: '서비스 소개', href: '/' },
      { name: '공지사항', href: '/notice' },
    ],
  },
  {
    name: '금융, 뭐하지?',
    href: '/financial-products/deposits',
    subMenu: [
      { name: '예금', href: '/financial-products/deposits' },
      { name: '적금', href: '/financial-products/savings' },
      { name: 'CMA', href: '/financial-products/cma' },
    ],
  },
  {
    name: '금융, 배우자!',
    href: '/educations',
    subMenu: [
      { name: '금융 교육', href: '/educations' },
      { name: '금융 뉴스', href: '/news' },
    ],
  },
  { name: '금융, 고마워!', href: '/policies', subMenu: [{ name: '청년 금융 정책', href: '/policies' }] },
];

export default MenuItem;
