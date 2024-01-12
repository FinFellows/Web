'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import ModifiedTori from '@/public/icons/modifiedglasses_goldtori.svg';
import NoticeList from '@/components/molecules/notice/noticeList';

const page = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <div className='w-full bg-red-100 flex  flex-col justify-center items-center'>
      <div className=''>
        <ModifiedTori width='68' height='53' />
        <NoticeList id={'1'} title='안녕하세요! 금융원정대의 첫 이야기를 시작함니둥' date='2023-01-23' />
      </div>
      <div className=' w-[342px] tablet:w-[438px] desktop:w-[855px] py-[10.61px] px-[5px] tablet:py-[17.49px] tablet:px-[15.38px] desktop:py-25 desktop:px-16 box-border h-auto min-h-[400px] rounded-8 bg-secondary border-[0.8px] border-border02 p-5 desktop:p-30 '>
        <div className=' '>
          말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마
        </div>
      </div>
    </div>
  );
};

export default page;
