import { user } from '@/class/user';
import { TNewsListApiResponse, TNews } from '@/types/newsTypes';

const accessToken = user.getAccessToken();

export const getNewsListData = async (params: string): Promise<TNewsListApiResponse | undefined> => {
  const url = `https://api.finfellows.co.kr/api/learn/news?${params}`;

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
      console.log('[✅fetchNewsListData API Data]', data);
      const NewsData = data.content;
      return data as TNewsListApiResponse;
    } else {
      console.error('[💥fetchNewsListData API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥fetchNewsListData Error]', error);
    return undefined;
  }
};

export const getNewsIdApi = async (id: number): Promise<TNews | undefined> => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NjEwMTMzLCJleHAiOjE3MDU4MTk3MzMsInJvbGUiOiJVU0VSIn0.de5EdIfB3WSm9d5bkBJGx9VQ5tjwcCCjQcT0IgejVhI_DmpfYRNo8p669QvxwgEOnIGOLPwB8QI7JTa_k1rRdg';
  const url = `https://api.finfellows.co.kr/api/learn/news/${id}`;

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
      console.log('[✅getNewsIdApi API Data]', data);
      return data as TNews;
    } else {
      console.error('[💥getNewsIdApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getNewsIdApi Error]', error);
    return undefined;
  }
};
