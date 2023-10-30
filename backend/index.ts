import express from "express"
/* import clickRoute from './routes/click' */
import homeRoute from './routes/home'

const PORT = 4000
const HOSTNAME = 'localhost'

const app = express()

app.use(express.static('public'))
app.use(express.json())

app.use('/', homeRoute);
/* app.use('/clicks', clickRoute) */

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});