'use client';

import NewsHeadLine from '@/components/molecules/News/NewsHeadLine';
import NewsContent from '@/components/molecules/News/NewsContent';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getNewsIdApi } from '@/api/newsApi';
import { TNews } from '@/types/newsTypes';
import WithLoginModal from '@/components/templates/login/WithLoginModal';
import { deleteEducationBookmarkApi, postEducationBookmarkApi } from '@/api/bookmarkApi';

const News = ({ params }: { params: { id: number } }) => {
  const [NewsInfo, setNewsInfo] = useState<TNews | undefined>();
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const fetchdata = async () => {
    try {
      const data = await getNewsIdApi(params.id);
      if (data) {
        setNewsInfo(data);
        setIsLiked(data.bookmarked);
        console.log(isLiked);
      }
    } catch (error) {
      console.error('Error fetching savingFetchData:', error);
    }
  };

  useEffect(() => {
    fetchdata();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHeartClick = async (id: number, bookmarked: boolean, contentType: 'NEWS_CONTENT') => {
    try {
      let apiResult;
      if (bookmarked) {
        apiResult = await deleteEducationBookmarkApi(id, 'NEWS_CONTENT');
      } else {
        apiResult = await postEducationBookmarkApi(id, 'NEWS_CONTENT');
      }
      if (apiResult !== undefined) {
        setIsLiked(!bookmarked);
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching NewsBookmark:', error);
    }
  };

  return (
    <div className='w-auto h-full flex flex-col items-center justify-center mt-[-10px]'>
      {showModal && (
        <WithLoginModal
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}
      <div className=''>
        {NewsInfo && (
          <NewsHeadLine
            bookmarked={NewsInfo.bookmarked}
            title={NewsInfo.title}
            created_at={NewsInfo.created_at}
            onHeartClick={() => onHeartClick(params.id, NewsInfo.bookmarked, 'NEWS_CONTENT')}
          />
        )}
      </div>
      <div>{NewsInfo && <NewsContent content={NewsInfo.content} />}</div>
    </div>
  );
};

export default News;
