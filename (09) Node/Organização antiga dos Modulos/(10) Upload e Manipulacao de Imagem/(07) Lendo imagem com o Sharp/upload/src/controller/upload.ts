import { RequestHandler } from "express";
import sharp from "sharp";

export const upload: RequestHandler = async (req, res) => {
   // console.log(req.body)
   // console.log(req.file)

   if (req.file) {
      // Informação sobre a imagem
      // const metaData = await sharp(req.file.path).metadata()
      // console.log(metaData)
      
      const image = await sharp(req.file.path)

   } else {
      console.log('Nenhum arquivo enviado')
   }

   res.json({})
}