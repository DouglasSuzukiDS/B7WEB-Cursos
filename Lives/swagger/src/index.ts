import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import swaggerUi from 'swagger-ui-express'
import yaml from 'yaml'
import fs from 'fs'
import { router } from './routes/main'

let cachedSpec: any = null

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(router) //36:17

const getOpenAPISpec = () => {
   const isDev = process.env.NODE_ENV !== 'production'

   if (!isDev || cachedSpec) return cachedSpec

   const raw = fs.readFileSync('./openapi.yaml', 'utf8')
   cachedSpec = yaml.parse(raw)

   return cachedSpec
}

server.use('/docs',
   swaggerUi.serve,
   swaggerUi.setup(null, {
      customSiteTitle: 'Users API Docs',
      swaggerOptions: {
         spec: getOpenAPISpec()
      }
   })
)

server.use((req, res) => {
   res.status(404).json({
      error: 'Not Found',
      data: null
   })
})

const port = process.env.PORT || 3001

server.listen(port, () => {
   console.log(`Server is running on port ${port}`)
})