export async function postChatbotNotAdmin(question: string) {
  const response = await fetch('https://api.finfellows.co.kr/api/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  });
  const { answer }: { answer: string } = await response.json();
  const { status } = response;

  return { status, answer };
}
