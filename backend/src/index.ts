
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user'
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use('/user', userRoutes)
  
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
  })

  app.use(express.static('public'))
  app.use(express.json())
  


