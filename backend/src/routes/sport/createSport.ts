import express from 'express'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
    const {slug, name, location, details, schedule, image} = req.body;
    try {
        const sport = await prisma.sport.create({
            data: {
                name: name,
                slug: slug,
                location: location,
                details: details,
                schedule: schedule,
                image: image,
                participants: {},
                participantCount: 0,
            }
        });
        console.log("sport="+sport.name);
        if (sport != null) {
            res.statusCode = 200;
            res.json(sport);
        } else {
            res.status(500).json({error: 'An error occurred while trying create sport'});
        }
    } catch (e: any) {
        console.error('Error occurred while creating sport :', e);
        res.status(500).json({error: 'An error occurred while trying to create sport', message: e.message});
    }
})

export default router