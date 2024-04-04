import express from 'express'
import {PrismaClient} from '@prisma/client'
import console = require("console");

const prisma = new PrismaClient();
const router = express.Router();

router.get('/:slug', async (req, res) => {
    console.log(req.params.slug);
    try {
        const sport = await prisma.sport.findFirst({
            where: {
                slug: req.params.slug,
            }
        });
        res.json(sport);
    } catch (e: any) {
        console.error("Error occurred when get sport :", e);
        res.status(500).json({error: 'An error occurred while trying update sport', message: e.message});
    }
})


export default router