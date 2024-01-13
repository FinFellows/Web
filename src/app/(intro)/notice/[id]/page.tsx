'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import ModifiedTori from '@/public/icons/glasses_goldtorihalf.svg';
import NoticeList from '@/components/molecules/notice/noticeList';

const page = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <div className='w-full flex  flex-col justify-center items-center'>
      <div className='mb-10 tablet:mb-30 flex flex-col items-end'>
        <ModifiedTori className='w-68 h-53 tablet:w-144 tablet:h-132 desktop:w-178 desktop:h-153 object-contain' />
        <NoticeList id={'1'} title='안녕하세요! 금융원정대의 첫 이야기를 시작함니둥' date='2023-01-23' />
      </div>
      <div className='dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-typoPrimary w-[342px] tablet:w-[438px] desktop:w-[855px]  p-16 tablet:p-35 desktop:p-44  box-border h-auto min-h-422 tablet:min-h-[600px] desktop:min-h-[1056px] rounded-8 bg-secondary border-[0.8px] border-border02 '>
        <div className='tablet:text-15 text-12  desktop:text-16 '>
          말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마말걸지마
        </div>
      </div>
    </div>
  );
};

export default page;
