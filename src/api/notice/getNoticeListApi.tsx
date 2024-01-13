import { TNoticeApiResponse, TGetNoticeListApiProps } from '@/components/templates/notice';

export const getNoticeListApi = async ({
  pageNum,
  size,
}: TGetNoticeListApiProps): Promise<TNoticeApiResponse | undefined> => {
  const apiEndPoint = `https://api.finfellows.co.kr/api/post?page=${pageNum}&size=${size}`;

  try {
    const res = await fetch(apiEndPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log('[✅getNoticeListApi API Data]', data);
      return data.data as TNoticeApiResponse;
    } else {
      console.error('[💥getNoticeListApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥getNoticeListApi Error]', error);
    return undefined;
  }
};
