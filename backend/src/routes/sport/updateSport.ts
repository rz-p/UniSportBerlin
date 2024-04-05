import express from 'express'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.put('/', async (req, res) => {
    const {slug, name, location, details, schedule, image} = req.body;
    try {
        let sport = await prisma.sport.update({
            where: {
                slug: slug
            },
            data: {
                name: name,
                location: location,
                details: details,
                schedule: schedule,
                image: image
            },
        });
        console.log("sport=" + sport.name);
        if (sport != null) {
            res.statusCode = 200;
            res.json(sport);
        } else {
            res.status(500).json({error: 'An error occurred while trying create sport'});
        }
    } catch (e: any) {
        console.error('Error occurred when updating sport :', e);
        res.status(500).json({error: 'An error occurred while trying update sport', message: e.message});
    }
})


export default router