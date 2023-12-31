import { Sequelize } from 'sequelize';
import { Request, Response } from "express";

import { Phrase } from "../models/Phrase";

export const ping = (req: Request, res: Response) => {
   res.json({ pong: true })
}

export const random = (req: Request, res: Response) => {
   let nRand: number = Math.floor(Math.random() * 10)
   res.json({ number: nRand })
}

export const nome = (req: Request, res: Response) => {
   let nome: string = req.params.nome
   res.json({ nome: `Você enviou o nome ${nome}` })
}

export const createPhrase = async (req: Request, res: Response) => {
   //console.log(req.body)
   let { author, txt } = req.body

   let newPhase = await Phrase.create({ author, txt })

   res.status(201)
   res.json({ id: newPhase.id, author, txt })
}

export const listPhrases = async (req: Request, res: Response) => {
   let list = await Phrase.findAll()

   res.json({ list })
}


export const getPhrase = async (req: Request, res: Response) => {
   let { id } = req.params

   let phrase = await Phrase.findByPk(id)

   if (phrase) {
      res.json({ phrase })
   } else {
      res.json({ error: 'Frase não encontrada' })
   }
}

export const updatePhrase = async (req: Request, res: Response) => {
   let { id } = req.params
   let { author, txt } = req.body
   console.log(req.body)

   let phrase = await Phrase.findByPk(id)

   if (phrase) {
      phrase.author = author
      phrase.txt = txt
      await phrase.save()
      console.log(phrase)

      res.json({ phrase })
   } else {
      res.json({ error: 'Frase não encontrada' })
   }
}

export const deletePhrase = async (req: Request, res: Response) => {
   let { id } = req.params

   await Phrase.destroy({  where: { id } })

   res.json({})
}

export const randomPhrase = async(req: Request, res: Response) => {
   let phrase = await Phrase.findOne({
      order: [
         Sequelize.fn('RANDOM')
      ]
   })

   if(phrase) {
      res.json({ phrase })
   } else {
      res.json({ error: 'Não há frases cadastradas' })
   }

}

export const uploadFile = async(req: Request, res: Response) => {
   const files = req.files as { [fieldname: string]: Express.Multer.File[] } // Avisa ao TS para aceitar qualquer arquivo

   // console.log( req.file ) // Para receber apenas 1 arquivo
   // console.log( req.files ) // Para receber vários arquivos
   console.log('Avatar', files.avatar)
   console.log('Gallery', files.gallery)

   res.json({})
}