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

export async function getChatbotMemory() {
  const response = await fetch('https://api.finfellows.co.kr/api/chatbot');
  const a = await response.json();
  console.log(a);
  const { memory }: { memory: { question: string; answer: string }[] } = await response.json();
  const { status } = response;

  return { status, memory };
}
