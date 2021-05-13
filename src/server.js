import cors from 'cors'
import express from "express"
import { verify } from './Middleware/Authentication.js'
import LoginRoter from './routes/Login.routes.js'
import Routes from './routes/routes.js'

const server = express();

server.use(cors())
server.use(express.json())

server.use('/', LoginRoter);

server.use(verify);

server.use(Routes)

server.listen(3000, () => console.log(`http://localhost:3000`));