export default async function newlistapi(params: string) {
  const response = await fetch('https://api.finfellows.co.kr/policy-info');
  const datas = await response.json;

  return datas;
}
