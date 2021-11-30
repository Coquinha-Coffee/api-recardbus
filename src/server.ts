import express from 'express'
import { routes } from './presentation/routes'

const server = express()
const port = 8000

server.use(express.json())
server.use(routes)

server.listen(port, () =>
    console.log(`Server is running http://localhost:8000`)
)
