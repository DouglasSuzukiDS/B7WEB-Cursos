import express from 'express'
import cors from 'cors'
import { router } from './routes/main'

const server = express()

server.use(cors())
server.use(express.json())

server.use('/api', router)

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)
})