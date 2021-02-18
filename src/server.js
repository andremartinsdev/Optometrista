import express from "express"
import Routes from './routes/routes'
import cors from 'cors'
import LoginRoter from './routes/Login.routes'
import { verify } from './Middleware/Authentication'

const server = express();

server.use(cors())
server.use(express.json())

server.use('/', LoginRoter);

server.use(verify);

server.use(Routes)

server.listen(3000, () => console.log(`http://localhost:3000`));