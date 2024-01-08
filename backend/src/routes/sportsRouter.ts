import express from 'express'
import findAllSport from './sport/findAllSport'
import createSport from './sport/createSport'
import deleteSport from './sport/deleteSport'
import likeSport from './sport/likeSport'
import updateSport from './sport/updateSport'

const sportRouter = express.Router()

sportRouter.use('/all', findAllSport)
sportRouter.use('/:slug/like', likeSport)
sportRouter.use('/new', createSport)
sportRouter.use('/delete', deleteSport)
sportRouter.use('/:slug/update', updateSport)

export default sportRouter;