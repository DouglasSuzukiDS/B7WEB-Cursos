import express, { type Request, type Response } from 'express'
import cors from 'cors'
import mainRoutes from './routes/main.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', mainRoutes)

app.use((req: Request, res: Response) => {
   res.status(404).json({ message: 'Route not found' })
})

app.use((err: Error, req: Request, res: Response, next: Function) => {
   console.error(err.stack)
   res.status(500).json({ message: 'Something went wrong!' })
})

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)
})