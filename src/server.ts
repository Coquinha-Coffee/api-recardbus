import express from 'express'

const server = express()
const port = 8000

server.use(express.json())

server.get('/', (request, response) =>
    response.json({ message: 'Hello World' })
)

server.listen(port, () =>
    console.log(`Server is running http://localhost:8000`)
)
