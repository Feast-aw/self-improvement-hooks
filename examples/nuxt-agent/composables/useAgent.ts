export const askAgent = async (question: string) => {
  const res = await fetch('/api/agent', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ question }) })
  return await res.json()
}
