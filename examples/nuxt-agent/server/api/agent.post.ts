import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)
  const question = body.question || ''
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return { error: 'OPENAI_API_KEY not set' }

  // simple OpenAI call (adjust endpoint/provider as needed)
  const resp = await $fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: question }],
      max_tokens: 400
    }
  })

  // extract text
  const answer = resp.choices?.[0]?.message?.content || JSON.stringify(resp)

  // write a pending summary into .learnings
  const learnDir = '.learnings/.pending_summaries'
  if (!existsSync('.learnings')) mkdirSync('.learnings')
  if (!existsSync(learnDir)) mkdirSync(learnDir, { recursive: true })
  const file = `${learnDir}/pending-${Date.now()}.md`
  const content = `## Pending Summary: ${new Date().toISOString()}\n**Source**: nuxt-agent-api\n**Question**: ${question}\n**Answer**:\n${answer}\n`
  try { writeFileSync(file, content) } catch (e) { /* ignore */ }

  return { answer }
})
