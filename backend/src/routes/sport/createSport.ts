import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post('/', async (req, res) => {
  const {slug, name, location, descriptionText, schedule} = req.body;
  try {
    const sport = await prisma.sport.create({
      data: {
        name: name,
        slug: slug,
        location: location,
        details: descriptionText,
        schedule: schedule,
        participants: {}
      }
    })
    res.json(sport)

  } catch (e: any) {
    console.error('Error occurred while creating sport :', e);
    res.status(500).json({ error: 'An error occurred while trying to create sport', message: e.message });
  }
})

export default router