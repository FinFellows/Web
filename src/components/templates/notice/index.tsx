'use client';
import NoticeList from '@/components/molecules/notice/noticeList';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { getNoticeListApi } from '@/api/notice/getNoticeListApi';

export type TGetNoticeListApiProps = {
  pageNum: number;
  size: number;
};
export type TNoticeProps = {
  id: number;
  title: string;
  created_at: string;
  content: string;
};

type TSort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

type TPageable = {
  pageNumber: number;
  pageSize: number;
  sort: TSort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type TNoticeApiResponse = {
  content: TNoticeProps[];
  pageable: TPageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: TSort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

const Notice = () => {
  const [notices, setNotices] = useState<TNoticeProps[] | undefined>(undefined);
  const [totalElements, setTotalElements] = useState<number | undefined>(0);
  const [totalPages, setTotalPages] = useState<number | undefined>(0);
  const fetchData = async () => {
    try {
      const data = await getNoticeListApi({ pageNum: 0, size: 8 });
      setNotices(data?.content);
      setTotalElements(data?.totalElements);
      setTotalPages(data?.totalPages);
    } catch (error) {
      console.error('Error fetching Notice:', error);
    }
  };
  useEffect(() => {
    fetchData();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Notices:', notices);
    console.log('Total Elements:', totalElements);
    console.log('Total Pages:', totalPages);
  }, [notices, totalElements, totalPages]);
  return (
    <>
      <div>
        <div className='heading-large border-b-2 border-black pb-10  mb-10 dark:text-dark-primary dark:border-white '>
          공지사항
        </div>
        {/* <Link href={`/notice/${id}`}> */}
        {/* <Link href={`/notice/1`}>
        <NoticeList
          id={1}
          title='안녕하세요! 금융원정대의 첫 이야기를 시작함니둥'
          date='2023-01-23'
          content={''}
          totalElements={0}
          totalPages={0}
        />
      </Link> */}

        {notices?.map((i) => (
          <NoticeList key={i.id} id={i.id} title={i.title} created_at={i.created_at} content={i.content} />
        ))}
      </div>
    </>
  );
};

export default Notice;
