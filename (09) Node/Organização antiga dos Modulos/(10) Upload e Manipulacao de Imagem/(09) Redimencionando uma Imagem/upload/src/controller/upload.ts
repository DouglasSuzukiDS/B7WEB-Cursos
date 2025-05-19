import { RequestHandler } from "express";
import sharp from "sharp";
import { v4 } from "uuid";
import fs from 'node:fs/promises'

export const upload: RequestHandler = async (req, res) => {
   // console.log(req.body)
   // console.log(req.file)

   if (req.file) {
      // Informação sobre a imagem
      // const metaData = await sharp(req.file.path).metadata()
      // console.log(metaData)

      const newName = v4() + '.png'
      const image = await sharp(req.file.path) // Carrega o arquivo
         .resize(500, 500, {
            fit: 'cover' // Padrao
         }) // Redimenciona
         .toFormat('jpg') // Converte para o formato
         .toFile(`./public/images/${newName}`) // Salva na pasta

      await fs.unlink(req.file.path) // Deleta o arquivo temporário
   } else {
      console.log('Nenhum arquivo enviado')
   }

   res.json({})
}