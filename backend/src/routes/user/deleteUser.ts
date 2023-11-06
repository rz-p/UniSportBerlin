import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function deleteUser(id) {
  const user = await prisma.user.delete({
    where: {
      id: String(id),
    }
  })
  console.log(user)
}

deleteUser(id)
  .catch(console.error)
  .finally(() => prisma.$disconnect())

export default deleteUser