import express from 'express'
import path from 'path'
const router = express.Router()


router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../frontend/public/index.html'))
});

export default router
module.exports = router