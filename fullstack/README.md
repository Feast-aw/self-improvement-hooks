# Fullstack MVP (TypeScript)

This folder contains a starter fullstack TypeScript project (frontend + backend API) scaffolded as an initial MVP for the `self-improvement-hooks` repo.

Highlights
- Frontend: Next.js (TypeScript)
- Backend: Fastify (TypeScript) + Prisma (Postgres)
- Auth: placeholder (to be implemented with NextAuth / JWT)
- Realtime: Socket.IO (placeholder)
- File upload: example endpoint (stores to /uploads)
- Testing: Jest placeholder + example
- Docker / docker-compose for local dev
- Prisma seed script for demo data

How to run (local, using docker-compose)

1. Copy `.env.example` to `.env` and set DATABASE_URL
2. docker-compose up --build

CI: .github/workflows/ci.yml included as a starting point.

Next steps: implement full auth, search, realtime chat UI, and tests iteratively.
