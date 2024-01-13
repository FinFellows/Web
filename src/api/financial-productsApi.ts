import { TgetBankApiResponse } from '@/types/financial-productsTypes';

export const getBankApi = async (bankGroupNo: string): Promise<TgetBankApiResponse[] | undefined> => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NjEwMTMzLCJleHAiOjE3MDU4MTk3MzMsInJvbGUiOiJVU0VSIn0.de5EdIfB3WSm9d5bkBJGx9VQ5tjwcCCjQcT0IgejVhI_DmpfYRNo8p669QvxwgEOnIGOLPwB8QI7JTa_k1rRdg';
  const url = `https://api.finfellows.co.kr/financial-products/bank?bankGroupNo=${bankGroupNo}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅getBankApi API Data]', data);
      return data.data as TgetBankApiResponse[];
    } else {
      console.error('[💥getBankApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getBankApi Error]', error);
    return undefined;
  }
};

export const postBankBookmarkApi = async (financial_product_id: number) => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NjEwMTMzLCJleHAiOjE3MDU4MTk3MzMsInJvbGUiOiJVU0VSIn0.de5EdIfB3WSm9d5bkBJGx9VQ5tjwcCCjQcT0IgejVhI_DmpfYRNo8p669QvxwgEOnIGOLPwB8QI7JTa_k1rRdg';
  const url = `https://api.finfellows.co.kr/bookmarks/financial-products/${financial_product_id}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅postBankBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥postBankBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥postBankBookmarkApi Error]', error);
    return undefined;
  }
};

export const deleteBankBookmarkApi = async (financial_product_id: number) => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NjEwMTMzLCJleHAiOjE3MDU4MTk3MzMsInJvbGUiOiJVU0VSIn0.de5EdIfB3WSm9d5bkBJGx9VQ5tjwcCCjQcT0IgejVhI_DmpfYRNo8p669QvxwgEOnIGOLPwB8QI7JTa_k1rRdg';
  const url = `https://api.finfellows.co.kr/bookmarks/financial-products/${financial_product_id}`;

  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅deleteBankBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥deleteBankBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥deleteBankBookmarkApi Error]', error);
    return undefined;
  }
};
