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

      /*const mini = await sharp(req.file.path)
         .resize(200, 200, { fit: 'cover' })
         .toFile(`./public/images/mini-${newName}`)*/

      const image = await sharp(req.file.path) // Carrega o arquivo
         .resize(1280, 720, { fit: 'cover' }) // Redimenciona
         // .greyscale() Deixa preto e branco
         //.tint('#F00') // Pinta a imagem
         /*.composite([ // Funciona como marca d'agua
            {
               input: './src/assets/node.png', gravity: 'southeast'
            },
            {
               input: './src/assets/node.png', gravity: 'southwest'
            },
            {
               input: './src/assets/node.png', gravity: 'northeast'
            },
            {
               input: './src/assets/node.png', gravity: 'northwest'
            },
            {
               input: './src/assets/node.png', gravity: 'centre'
            }
         ])*/
         // .toFormat('jpg') // Converte para o formato
         .toBuffer() // Armazena apenas o Buffer
      // .toFile(`./public/images/${newName}`) // Salva na pasta

      const finalImage = await sharp(image)
         .composite([ // Funciona como marca d'agua
            { input: './src/assets/node.png' }
         ])
         .toFile(`./public/images/${newName}`)

      const thumbnailImage = await sharp(image)
         .resize(200)
         .toFile(`./public/images/mini-${newName}`)

      await fs.unlink(req.file.path) // Deleta o arquivo temporário
   } else {
      console.log('Nenhum arquivo enviado')
   }

   res.json({})
}