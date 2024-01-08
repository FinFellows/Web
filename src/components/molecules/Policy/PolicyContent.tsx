'use client';
import { useSearchParams } from 'next/navigation';
type TPolicyContentProps = {
  policyContents: string;
  operatingPeriod: string;
  applicationPeriod: string;
  supportscale: string;
  age: string;
  residenceAndIncome: string;
  academicAbillity: string;
  major: string;
  employmentStatus: string;
  specializedFiedl: string;
  additionalClues: string;
  restiricitionsOnParticipation: string;
  procedures: string;
  audit: string;
  site: string;
  document: string;
};
const PolicyContent: React.FC<TPolicyContentProps> = ({
  policyContents,
  operatingPeriod,
  applicationPeriod,
  supportscale,
  age,
  residenceAndIncome,
  academicAbillity,
  major,
  employmentStatus,
  specializedFiedl,
  additionalClues,
  restiricitionsOnParticipation,
  procedures,
  audit,
  site,
  document,
}) => {
  return (
    <div>
      <div>
        <div className='border-2 border-color-border01 mx-[-50px] rounded-[20px] py-[100px] text w-[885px]'>
          <div className='ml-[44px] mb-[10px] mt-[-60px] '>
            <div className='heading-xl font-bold w-[767px] border-b-[2px] mb-10 text-typoPrimary border-color-border02 '>
              정책 요약
            </div>
            <div className='flex pb-10 '>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>지원 내용</div>
              <div
                className='paragraph-medium  ml-40 text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {policyContents}
              </div>
            </div>

            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>운영 기간</div>
              <div
                className='paragraph-medium  ml-40 text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {operatingPeriod}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>신청 기간</div>
              <div
                className='paragraph-medium  ml-40 text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {applicationPeriod}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>지원 규모</div>
              <div
                className='paragraph-medium  ml-40 marker:text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {supportscale}
              </div>
            </div>
          </div>
          <div className='ml-[44px] my-63 '>
            <div className='heading-xl font-bold w-[767px] border-b-[2px] mb-10 text-typoPrimary border-color-border02'>
              신청 자격
            </div>
            <div className='flex pb-10 '>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>연령</div>
              <div
                className='paragraph-medium  ml-40 text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {age}
              </div>
            </div>

            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>거주지 및 소득</div>
              <div
                className='paragraph-medium  ml-40 text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {residenceAndIncome}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>학력</div>
              <div
                className='paragraph-medium  ml-40 text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {academicAbillity}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>전공</div>
              <div
                className='paragraph-medium  ml-40 marker:text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {major}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>취업 상태</div>
              <div
                className='paragraph-medium  ml-40 marker:text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {employmentStatus}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>특화 분야</div>
              <div
                className='paragraph-medium  ml-40 marker:text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {specializedFiedl}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>추가 단서 사항</div>
              <div
                className='paragraph-medium  ml-40 marker:text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {additionalClues}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[110px] text-typoSecondary'>참여 제한 대상</div>
              <div
                className='paragraph-medium  ml-40 marker:text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {restiricitionsOnParticipation}
              </div>
            </div>
          </div>
          <div className='ml-[44px]'>
            <div className='heading-xl font-bold w-[767px] border-b-[2px] mb-10 text-typoPrimary border-color-border02'>
              신청 방법
            </div>
            <div className='flex pb-10 '>
              <div className='paragraph-medium  w-[90px] text-typoSecondary'>신청 절차</div>
              <div
                className='paragraph-medium  ml-40 text-typoPrimary mr-[13px] whitespace-pre-line text-justify'
                style={{ width: '90%' }}
              >
                {procedures}
              </div>
            </div>

            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[90px] text-typoSecondary'>심사 및 발표</div>
              <div className='paragraph-medium  ml-40 text-typoPrimary mr-[13px]' style={{ width: '90%' }}>
                {audit}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[90px] text-typoSecondary'>신청 사이트</div>
              <div className='paragraph-medium  ml-40 text-typoPrimary mr-[13px]' style={{ width: '90%' }}>
                {site}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-medium  w-[90px] text-typoSecondary'>제출 서류</div>
              <div className='paragraph-medium  ml-40 marker:text-typoPrimary mr-[13px]' style={{ width: '90%' }}>
                {document}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyContent;
