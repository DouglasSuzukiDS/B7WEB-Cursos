import path from "path"
import fs from "fs/promises"
import { fileURLToPath } from "url"
import sharp from "sharp"

const __file = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__file)

const AVATAR_SIZE = 50
const AVATAR_DIR = path.join(__dirname, '../../public/avatars')

export const saveAvatar = async (fileBuffer: Buffer, filename: string) => {
   await fs.mkdir(AVATAR_DIR, { recursive: true })

   const ext = path.extname(filename)

   const filePath = `avatar-${Date.now()}-${ext}`

   const filepath = path.join(AVATAR_DIR, filePath)

   await sharp(fileBuffer)
      .resize(AVATAR_SIZE, AVATAR_SIZE, {
         fit: "cover",
         position: "center"
      })
      .toFile(filepath)

   return filename
}

export const deleteAvatar = async (filename: string) => {
   if (!filename) return

   const filepath = path.join(AVATAR_DIR, filename)

   await fs.unlink(filepath)
}