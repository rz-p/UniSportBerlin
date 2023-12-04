import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post('/add', async (req, res) => {
  try {
    await prisma.sport.update({
        where: {
          slug: req.body.slug,
        },
        data: {
          participantCount: {increment: 1} ,
        },
      })
    res.statusCode = 200;
  } catch (e: any) {
    console.error('Error occurred adding like :', e);
    res.status(500).json({ error: 'An error occurred while trying to add like', message: e.message });
  }
})

router.post('/remove', async (req, res) => {
    try {
        await prisma.sport.update({
            where: {
              slug: req.body.slug,
            },
            data: {
              participantCount: {decrement: 1} ,
            },
          })
        res.statusCode = 200;
      } catch (e: any) {
        console.error('Error occurred removing like :', e);
        res.status(500).json({ error: 'An error occurred while trying to dislike', message: e.message });
      }
  })


export default router