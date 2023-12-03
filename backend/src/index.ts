
import express from 'express'
import cors from 'cors'
import sportRoutes from './routes/sportsRouter'

const router = express.Router()
const app = express()
const port = 4000

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: '*',
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use('/sports', sportRoutes)
  
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
  })

  app.use(express.static('public'))
  app.use(express.json())
  


