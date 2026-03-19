import fs from 'fs'
import path from 'path'
export default defineEventHandler(() => {
  const notesDir = path.resolve('./notes')
  if (!fs.existsSync(notesDir)) return []
  const files = fs.readdirSync(notesDir).filter(f=>f.endsWith('.md'))
  return files.map(f=>({ id: f.replace(/\.md$/, ''), title: f.replace(/\.md$/, '') }))
})
