import express from 'express'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        res.status(405).json({error: 'Method not allowed'});
    } catch (e: any) {
        console.error("Error : ", e);
        res.status(405).json({error: 'Method not allowed', message: e.message});
    }
})
export default router
