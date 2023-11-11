import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.delete('/:slug', async (req, res) => {
  const { slug } = req.params
  try{
  const post = await prisma.sport.delete({
    where: {
      slug: String(slug),
    },
  })
  res.json(post)
  } catch (e: any) {
    console.error('Error occurred while deleting sport :', e);
    res.status(500).json({ error: 'An error occurred while trying to delete sport', message: e.message });
  }
})


export default router