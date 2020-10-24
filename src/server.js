import express from 'express'
import Routes from './routes/routes'

const server = express();

server.use(express.json())


server.get('/', (req, res, next) => {
  return res.json({ teste: 'ok' })
})


server.use((req, res, next) => {
  req.idEmpresa = 1
  next()
})

server.use(Routes)


server.listen(3000);