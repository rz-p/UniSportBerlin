import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'
const app = express()
const port = 4000

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
          name: 'Rich',
          email: 'hello@prisma.com',
          sports: {
            create: {
              name: 'Football',
              location: 'TU Berlin',
              slug: 'football-tu',
            },
          },
        },
      })
    
      const allUsers = await prisma.user.findMany({
        include: {
          sports: true,
        },
      })
      console.dir(allUsers, { depth: null })
}

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
  })

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

