import express from 'express'

const server = express();

server.use(express.json())

server.get('/', (req, res, next) => {
  return res.json({ teste: 'ok' })
})


server.listen(3000);