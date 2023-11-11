import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const sports = await prisma.sport.findMany();
    res.json(sports);
  } catch (e: any) {
    console.error('Error occurred while fetching :', e);
    res.status(500).json({ error: 'An error occurred while trying to fetch sports', message: e.message });
  }
})

export default router