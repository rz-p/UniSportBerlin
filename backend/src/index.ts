import express from 'express'
import cors from 'cors'
import sportRouter from './routes/sportsRouter'
import login from "./routes/login";

const app = express();
const port = 4000;
let bodyParser  = require('body-parser');
app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
}));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/sports', sportRouter)
app.use('/login', login)

app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
})
app.use(express.static('public'))
app.use(express.json())
