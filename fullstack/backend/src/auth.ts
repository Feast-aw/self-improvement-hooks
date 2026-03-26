import { FastifyInstance } from 'fastify'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'devsecret'

export default async function authRoutes(app: FastifyInstance) {
  app.post('/api/auth/register', async (req, reply) => {
    const { email, password, name } = req.body as any
    if (!email || !password) return reply.status(400).send({ error: 'email & password required' })
    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { email, password: hashed, name } })
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' })
    reply.setCookie('token', token, { httpOnly: true, path: '/' })
    return { ok: true }
  })

  app.post('/api/auth/login', async (req, reply) => {
    const { email, password } = req.body as any
    if (!email || !password) return reply.status(400).send({ error: 'email & password required' })
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return reply.status(401).send({ error: 'invalid credentials' })
    const match = await bcrypt.compare(password, user.password)
    if (!match) return reply.status(401).send({ error: 'invalid credentials' })
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' })
    reply.setCookie('token', token, { httpOnly: true, path: '/' })
    return { ok: true }
  })

  app.post('/api/auth/logout', async (req, reply) => {
    reply.clearCookie('token', { path: '/' })
    return { ok: true }
  })
}
