import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { mainRouter } from './routes/main'


const server = express()
server.use(helmet())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.use(express.json())

server.use(mainRouter)

server.listen(process.env.PORT || 3001, () => {
   console.log(`Server running in port ${process.env.PORT}`) 
}) 