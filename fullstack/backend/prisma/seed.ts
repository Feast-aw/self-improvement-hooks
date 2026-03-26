import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
  await prisma.user.deleteMany()
  const u1 = await prisma.user.create({ data: { email: 'alice@example.com', password: '$2b$10$CwTycUXWue0Thq9StjUM0uJ8QeZb7f3z1pQ0Yz1G9q9Z1pQ1u1e3a' , name: 'Alice' }})
  const u2 = await prisma.user.create({ data: { email: 'bob@example.com', password: '$2b$10$CwTycUXWue0Thq9StjUM0uJ8QeZb7f3z1pQ0Yz1G9q9Z1pQ1u1e3a' , name: 'Bob' }})
  console.log({u1,u2})
}

main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>{})
