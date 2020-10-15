import nextConnect from 'next-connect'

import OrphanagesController from '../../../controllers/OrphanagesControoler'
import onError from '../../../erros/handler'
import middleware from '../../../middlewares'

const handler = nextConnect({ onError })

handler.use(middleware)

handler.get(OrphanagesController.show)

export default handler
