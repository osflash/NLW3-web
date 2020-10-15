import multer from 'multer'
import nextConnect from 'next-connect'

import uploadConfig from '../../../config/upload'
import OrphanagesController from '../../../controllers/OrphanagesControoler'
import onError from '../../../erros/handler'
import middleware from '../../../middlewares'

const upload = multer(uploadConfig)
const handler = nextConnect({ onError })

handler.use(middleware)
handler.use(upload.array('images'))

handler.get(OrphanagesController.index)
handler.post(OrphanagesController.create)

export default handler
