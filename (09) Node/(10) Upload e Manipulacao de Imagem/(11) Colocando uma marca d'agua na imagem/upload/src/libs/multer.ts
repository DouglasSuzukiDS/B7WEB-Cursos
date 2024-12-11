import multer from "multer";

const diskStorage = multer.diskStorage({
   filename: (req, file, cb) => {
      const prefix = `img-${Math.floor(Math.random() * 9999)}`
      cb(null, prefix + '.jpg');
   },
   destination: (req, file, cb) => {
      cb(null, './public/uploads/tmp');
   }
})

const memoryStorage = multer.memoryStorage()

export const upload = multer({
   // storage: diskStorage
   // storage: memoryStorage
   dest: './public/tmp'
})