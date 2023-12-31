import { RequestHandler } from "express"
import * as events from '../services/events'

export const getAll: RequestHandler = async(req, res) => {
   const items = await events.getAll()

   if(items) return res.json({ events: items })

   res.json({ error: 'Ocorreu um erro.' })
}

export const getEvent: RequestHandler = async(req, res) => {
   const { id } = req.params

   const eventItem = await events.getOne(parseInt(id))

   if(eventItem) return res.json({ event: eventItem })

   res.json({ error: 'Ocorreu um erro.' })
}