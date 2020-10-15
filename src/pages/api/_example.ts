import { NextApiHandler } from 'next'

const createUser: NextApiHandler = async (req, res) => {
  try {
    return res.status(200).json({})
  } catch (err) {
    return res.status(500).end('Internal server error')
  }
}

const getUser: NextApiHandler = async (req, res) => {
  try {
    return res.status(200).json({})
  } catch (err) {
    return res.status(500).end('Internal server error')
  }
}

const updateUser: NextApiHandler = (req, res) => {
  try {
    return res.status(200).json({})
  } catch (error) {
    return res.status(500).end('Internal server error')
  }
}

const removeUser: NextApiHandler = (req, res) => {
  try {
    return res.status(200).json({})
  } catch (error) {
    return res.status(500).end('Internal server error')
  }
}

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'POST':
      return createUser(req, res)
    case 'GET':
      return getUser(req, res)
    case 'PUT':
      return updateUser(req, res)
    case 'DELETE':
      return removeUser(req, res)
    default:
      return res.status(404).json({
        statusCode: 404,
        message: 'Not Found'
      })
  }
}

export default handler
