import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findAllUsers() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

findAllUsers()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

export default findAllUsers