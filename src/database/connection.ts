import 'reflect-metadata'
import { NextApiRequest, NextApiResponse } from 'next'
import { RequestHandler } from 'next-connect'
import {
  ConnectionOptions,
  createConnection,
  getConnectionOptions
} from 'typeorm'

import Image from '../models/Image'
import Orphanage from '../models/Orphanage'

export const initializeDatabase = async () => {
  const connectionOptions = await getConnectionOptions()

  const options: ConnectionOptions = {
    ...connectionOptions,
    entities: [Image, Orphanage],
    migrations: [__dirname + 'src/database/migrations/*.ts']
  }

  return await createConnection(options)
}

const database: RequestHandler<NextApiRequest, NextApiResponse> = async (
  req,
  res,
  next
) => {
  const connection = await initializeDatabase()

  if (!connection.isConnected) await connection.connect()

  return next()
}

export default database
