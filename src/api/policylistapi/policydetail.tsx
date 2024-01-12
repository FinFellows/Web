fetch('https://api.finfellows.co.kr/policy-info/1', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    // data를 활용하는 로직을 작성하세요
    console.log(data);
  })
  .catch((error) => {
    // 에러 처리 로직을 작성하세요
    console.error(error);
  });
