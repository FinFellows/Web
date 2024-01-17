'use client';

import EducationHeadLine from '@/components/molecules/Education/EducationHeadLine';
import EducationContent from '@/components/molecules/Education/EducationContent';
import ContentsEditBtn from '@/components/molecules/manage/ContentsEditBtn';
import ContentsDeleteBtn from '@/components/molecules/manage/ContentsDeleteBtn';
import ManageBtns from '@/components/molecules/manage/ManageBtns';
import { TEducation } from '@/components/molecules/Education/EducationList';
import { useEffect, useState } from 'react';
import { getEducationIdApi } from '@/api/education/educationDetailApi';
import { deleteEducationBookmarkApi, postEducationBookmarkApi } from '@/api/education/educationApi';

import { testApi, testApiEditor } from '@/api/testApi';
import useEduDetail from '@/hooks/useEduDetail';
import { patchEduApi } from '@/api/eduApi';

const Education = ({ params }: { params: { id: number } }) => {
  const { eduData } = useEduDetail(params.id);

  const onHeartClick = async (id: number, bookmarked: boolean, contentType: 'EDU_CONTENT') => {};
  return (
    <div className='flex items-center justify-center mt-[-70px] '>
      <div className='flex-col flex'>
        {eduData && (
          <EducationHeadLine
            title={eduData.title}
            bookmarked={eduData.bookmarked}
            onHeartClick={() => onHeartClick(params.id, eduData.bookmarked, 'EDU_CONTENT')}
          />
        )}
        {eduData && <EducationContent content={eduData.content} />}
        <ManageBtns>
          {/* TODO: 글 수정/삭제하는 api 연결 (editFn, deleteFn) TODO: title, content 실제 값으로 수정 */}
          {eduData && (
            <ContentsEditBtn id={eduData.id} title={eduData.title} content={eduData.content} editFn={patchEduApi} />
          )}
          <ContentsDeleteBtn deleteFn={testApi} />
        </ManageBtns>
      </div>
    </div>
  );
};

export default Education;
// 디자인 만든거
