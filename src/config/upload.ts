import multer from 'multer'
import path from 'path'

const uploadsDirectory = path.resolve(process.cwd(), 'public', 'uploads')

export default {
  storage: multer.diskStorage({
    destination: uploadsDirectory,
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`

      cb(null, fileName)
    }
  })
}
