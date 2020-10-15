import { NextApiRequest, NextApiResponse } from 'next'
import { getRepository, getConnectionManager } from 'typeorm'
import * as Yup from 'yup'

import Orphanage from '../models/Orphanage'

interface ExtendedRequest extends NextApiRequest {
  files: Express.Multer.File[]
}

import orphanageView from '../views/orphanage_view'

const close = async () => {
  const connectionManager = getConnectionManager()

  const connection = connectionManager.get('default')

  await connection.close()
}

export default {
  async index(req: NextApiRequest, res: NextApiResponse) {
    try {
      const orphanagesRepository = getRepository(Orphanage)

      const orphanages = await orphanagesRepository.find({
        relations: ['images']
      })

      return res.json(orphanageView.renderMany(orphanages))
    } finally {
      await close()
    }
  },

  async show(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { id } = req.query
      const orphanagesRepository = getRepository(Orphanage)

      const data = { id }

      const schema = Yup.object().shape({
        id: Yup.number().required()
      })

      await schema.validate(data)

      const orphanages = await orphanagesRepository.findOneOrFail(Number(id), {
        relations: ['images']
      })

      return res.json(orphanageView.render(orphanages))
    } finally {
      await close()
    }
  },

  async create(req: ExtendedRequest, res: NextApiResponse) {
    try {
      const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
      } = req.body

      const orphanagesRepository = getRepository(Orphanage)

      const requestImages = req.files

      const images = requestImages.map(image => ({ path: image.filename }))

      const data = {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends: open_on_weekends === 'true',
        images
      }

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(
          Yup.object().shape({
            path: Yup.string().required()
          })
        )
      })

      await schema.validate(data, {
        abortEarly: false
      })

      const orphanage = orphanagesRepository.create(data)

      await orphanagesRepository.save(orphanage)

      return res.status(201).json(orphanage)
    } finally {
      await close()
    }
  }
}
