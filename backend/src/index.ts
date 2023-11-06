
import express from 'express'
import cors from 'cors'
import {newUser, deleteUser} from './routes/user'
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use('/user/new', newUser)
app.use('/user/delete', deleteUser)
  
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
  })

  app.use(express.static('public'))
  app.use(express.json())
  


