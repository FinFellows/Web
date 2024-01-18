// NewsList 컴포넌트
'use client';
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import Link from 'next/link';

import Pagination from '@/components/molecules/pagination/Pagination';
import useUser from '@/hooks/useUser';
import { getNewsListData, postNewsApi } from '@/api/newsApi';
import { TNews } from '@/types/newsTypes';
import WithLoginModal from '@/components/templates/login/WithLoginModal';
import { deleteEducationBookmarkApi, postEducationBookmarkApi } from '@/api/bookmarkApi';
import { postNoticeApi } from '@/api/noticeApi';
import ContentsCreateBtn from '../manage/ContentsCreateBtn';
import ManageBtns from '../manage/ManageBtns';
import EditorRenderer from '@/components/templates/editor/EditorRenderer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import NewsImage from '@/public/icons/newsthumbnail/Untitled.jpeg';
const NewsList = () => {
  const { user } = useUser();
  const router = useRouter();
  const [NewsListData, setNewsListData] = useState<TNews[] | undefined>([]);
  const [showModal, setShowModal] = useState(false);
  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(0); //총 페이지 수

  const fetchData = async () => {
    try {
      const data = await getNewsListData(`size=10&page=${pageNum}`);
      if (data) {
        setPageTotalNum(data.totalPages);
        setNewsListData(data.content);
        console.log(NewsListData);
      }
    } catch (error) {
      console.error('Error fetching bankListFetchData:', error);
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const onHeartClick = async (id: number, bookmarked: boolean) => {
    try {
      let apiResult;
      if (bookmarked) {
        apiResult = await deleteEducationBookmarkApi(id, 'NEWS_CONTENT');
      } else {
        apiResult = await postEducationBookmarkApi(id, 'NEWS_CONTENT');
      }
      if (apiResult !== undefined) {
        setNewsListData(NewsListData?.map((item) => (item.id === id ? { ...item, bookmarked: !bookmarked } : item)));
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  return (
    <div className='desktop:py-39 tablet:py-46 py-20 w-342 tablet:w-[438px] desktop:w-[855px] '>
      {showModal && (
        <WithLoginModal
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}{' '}
      {NewsListData?.map((i) => {
        let date = new Date(i.created_at);
        let dateOnly = date.toISOString().split('T')[0];
        return (
          <div
            key={i.id}
            className='flex w-full mb-10 border-2 border-color-[#D6D6D6] rounded-[10px] border-border02 hover:border-main hover:border-2 dark:bg-[#343434] dark:border-[#383838]'
            onClick={() => router.push(`/news/${i.id}`)}
          >
            <div className=' border-border-02  '>
              <Image
                src={NewsImage}
                width='500'
                height='500'
                className='w-87 tablet:w-[112px] desktop:w-[167px] h-full rounded-l-[10px]'
                alt={'뉴스썸네일'}
              />
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex-col bg-secondary px-12 w-[210px] tablet:w-[300px] desktop:w-[630px] dark:bg-[#343434]'>
                <h2 className='heading-small tablet:heading-medium desktop:heading-xl font-bold mt-[5px] pb-14 dark:text-[#D6D6D6]'>
                  {i.title}
                </h2>
                <div className='text-typoSecondary paragraph-small tablet:paragraph-medium desktop:paragraph-large'>
                  <div className='w-150 tablet:w-180 h-25 tablet:h-26 desktop:h-29 desktop:w-578 overflow-hidden text-ellipsis whitespace-nowrap'>
                    <EditorRenderer contents={i.content} />
                  </div>
                  <div className='pb-10 text-typoSecondary paragraph-small tablet:paragraph-medium desktop:paragraph-large'>
                    {dateOnly}
                  </div>
                </div>
              </div>

              <p
                className='h-[26px] w-[26px] tablet:h-33 tablet:w-33 desktop:w-37 tablet:ml-[-15px] desktop:h-37'
                onClick={(event) => {
                  event.stopPropagation();
                  onHeartClick(i.id, i.bookmarked);
                }}
              >
                {i.bookmarked ? <Heartclick /> : <Heartdefault />}
              </p>
            </div>
          </div>
        );
      })}
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
      <div className='mt-43'>
        <ManageBtns>
          <ContentsCreateBtn createFn={postNewsApi} />
        </ManageBtns>
      </div>
    </div>
  );
};

export default NewsList;
