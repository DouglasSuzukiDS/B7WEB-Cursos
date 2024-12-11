import express, { urlencoded } from "express"
import helmet from "helmet"
import cors from 'cors'
import { mainRouter } from "./routes/main"
const server = express()

server.use(helmet())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.use(express.json())

server.use(mainRouter)

const port = 3001

server.listen(port, () => {
   console.log(`Server running in http://localhost:${port}`)
})