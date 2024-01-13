'use client';

import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import React, { useEffect, useState } from 'react';
import Accordian from '@/components/organisms/mypage/accordian';
import { getFinancialProductsBookmarkApi } from '@/api/mypageApi';
import { TCmaBookmark, TFinancialProductBookmark, TFinancialProductsBookmarkApiResponse } from '@/types/mypageTypes';
import Link from 'next/link';

type TBookmarks = {
  cma: TCmaBookmark[];
  deposit: TFinancialProductBookmark[];
  saving: TFinancialProductBookmark[];
};

const FinancialProducts = () => {
  const [bookmarks, setBookmarks] = useState<TBookmarks>({ cma: [], deposit: [], saving: [] });

  const fetchData = async () => {
    try {
      const data = (await getFinancialProductsBookmarkApi()) as TFinancialProductsBookmarkApiResponse;
      const cma = data?.cmaBookmarks || [];
      const deposit = data?.financialProductBookmarks.filter((item) => item.financialProductType === 'DEPOSIT') || [];
      const saving = data?.financialProductBookmarks.filter((item) => item.financialProductType === 'SAVING') || [];

      setBookmarks({ cma, deposit, saving });
    } catch (error) {
      console.error('Error fetching Financial Products:', error);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPolicyItems = (
    items: TFinancialProductBookmark[] | TCmaBookmark[],
    productType: 'DEPOSIT' | 'SAVING' | 'CMA',
  ) =>
    items.map((item, index) => {
      let id: number;
      let link: string;
      if ('cmaId' in item) {
        id = item.cmaId;
        link = 'cma';
      } else {
        id = item.financialProductId;
        item.financialProductType === 'DEPOSIT' ? (link = 'deposits') : (link = 'savings');
      }
      return (
        <Link key={index} href={`/financial-products/${link}/${id}`}>
          <PolicyItem
            img={''}
            name={item.productName}
            description={item.companyName}
            like={true}
            maxInterestRate={item.maximumPreferredInterestRate}
            interestRate={
              productType === 'CMA'
                ? (item as TCmaBookmark).specialCondition
                : (item as TFinancialProductBookmark).interestRate
            }
          />
        </Link>
      );
    });
  return (
    <div>
      <ul className='mb-23 tablet:mb-39 '>
        <Accordian title='예금' count={bookmarks.deposit.length}>
          {renderPolicyItems(bookmarks.deposit, 'DEPOSIT')}
        </Accordian>
      </ul>
      <ul className='mb-23 tablet:mb-39'>
        <Accordian title='적금' count={bookmarks.saving.length}>
          {renderPolicyItems(bookmarks.saving, 'SAVING')}
        </Accordian>
      </ul>
      <ul className='mb-23 tablet:mb-39'>
        <Accordian title='CMA' count={bookmarks.cma.length}>
          {renderPolicyItems(bookmarks.cma, 'CMA')}
        </Accordian>
      </ul>
    </div>
  );
};

export default FinancialProducts;
