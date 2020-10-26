import express from 'express'
import Routes from './routes/routes'
import cors from 'cors'

const server = express();

server.use(cors())

server.use(express.json())


server.use((req, res, next) => {
  req.idEmpresa = 1
  next()
})

server.use(Routes)

server.listen(3000, () => console.log(`http://localhost:3000`));