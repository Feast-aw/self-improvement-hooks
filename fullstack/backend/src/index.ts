import Fastify from 'fastify'
import multipart from 'fastify-multipart'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = Fastify()
app.register(multipart)

app.get('/api/health', async () => ({ status: 'ok' }))

app.post('/api/upload', async (req, reply) => {
  const parts = req.parts()
  for await (const part of parts) {
    if (part.type === 'file') {
      const filename = part.filename || 'unknown'
      const writeStream = require('fs').createWriteStream('./uploads/' + filename)
      await part.file.pipe(writeStream)
    }
  }
  return { uploaded: true }
})

const server = createServer(app.server)
const io = new Server(server)

io.on('connection', socket => {
  console.log('socket connected', socket.id)
  socket.on('message', (msg) => {
    io.emit('message', msg)
  })
})

const start = async () => {
  try {
    await app.listen({ port: 4000 })
    console.log('Server listening on 4000')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
