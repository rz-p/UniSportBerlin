import express from 'express'
import findAllSports from './sport/findAllSport'
import createSport from './sport/createSport'
import deleteSport from './sport/deleteSport'

const userRouter = express.Router()

userRouter.use('/', findAllSports)
userRouter.use('/new', createSport)
userRouter.use('/delete', deleteSport)

export default userRouter;