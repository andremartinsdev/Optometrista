import express from 'express'
import Routes from './routes/routes'

const server = express();

server.use(express.json())

server.get('/', (req, res, next) => {
  return res.json({ teste: 'ok' })
})

server.use(Routes)


server.listen(3000);