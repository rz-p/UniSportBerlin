import express from 'express'
import findAllSports from './sport/findAllSport'
import createSport from './sport/createSport'
import deleteSport from './sport/deleteSport'
import likeSport from './sport/likeSport'

const sportRouter = express.Router()

sportRouter.use('/all', findAllSports)
sportRouter.use('/:slug/like', likeSport)
sportRouter.use('/new', createSport)
sportRouter.use('/delete', deleteSport)

export default sportRouter;