import fs from 'fs'
import path from 'path'
export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event)
  const file = body?.['image']?.[0]
  if (!file) return { error: 'no file' }
  const uploads = path.resolve('./public/uploads')
  if (!fs.existsSync(uploads)) fs.mkdirSync(uploads, { recursive: true })
  const filename = Date.now() + '_' + file.filename
  const out = path.join(uploads, filename)
  fs.writeFileSync(out, Buffer.from(await file.arrayBuffer()))
  return { url: '/uploads/' + filename }
})
