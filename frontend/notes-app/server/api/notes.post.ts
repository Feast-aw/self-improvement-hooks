import fs from 'fs'
import path from 'path'
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, content } = body
  const notesDir = path.resolve('./notes')
  if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir, { recursive: true })
  const filePath = path.join(notesDir, id + '.md')
  fs.writeFileSync(filePath, content || '', 'utf8')
  return { ok: true }
})
