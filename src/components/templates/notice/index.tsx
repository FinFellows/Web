'use client';
import NoticeList from '@/components/molecules/notice/noticeList';
import React, { useState } from 'react';
import { TNoticeListProps } from '@/components/molecules/notice/noticeList';
import Link from 'next/link';

const Notice = () => {
  const [notice, setNotice] = useState<TNoticeListProps>();
  return (
    <div>
      <div className='heading-large border-b-2 border-black pb-10  mb-10 dark:text-dark-primary dark:border-white '>
        공지사항
      </div>
      {/* <Link href={`/notice/${id}`}> */}
      <Link href={`/notice/1`}>
        <NoticeList id={'1'} title='안녕하세요! 금융원정대의 첫 이야기를 시작함니둥' date='2023-01-23' />
      </Link>
    </div>
  );
};

export default Notice;
