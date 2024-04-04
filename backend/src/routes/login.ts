import express from 'express'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post('/', async (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    try {
        let user = await prisma.user.findFirst({
            where: {
                name: username,
                password: password
            }
        });
        if (user!=null) {
            res.statusCode = 200;
            console.log("res.statusCode = 200 " + user);
            res.json(user);
        } else {
            res.status(401).json({error: 'An error occurred while trying get user'});
        }
    } catch (e: any) {
        console.error("Error :", e);
        res.status(401).json({error: 'An error occurred while trying get user', message: e.message});
    }
})

export default router
