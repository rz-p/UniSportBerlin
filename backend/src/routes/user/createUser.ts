import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createUser(name: string, email: string) {
   const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
    },
  })
  console.log(user)
}

/* createUser(name, email).catch(console.error).finally(() => prisma.$disconnect()) */

export default createUser