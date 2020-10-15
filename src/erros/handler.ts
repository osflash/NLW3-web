import { NextApiRequest, NextApiResponse } from 'next'
import { ErrorHandler } from 'next-connect'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler: ErrorHandler<NextApiRequest, NextApiResponse> = (
  error,
  _req,
  res,
  _next
) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {}

    if (error.inner.length) {
      error.inner.forEach(err => {
        errors[err.path] = err.errors
      })
    } else {
      errors[error.path] = error.errors
    }

    return res.status(400).json({ message: 'Validation fails', errors })
  }

  console.error(error)

  return res.status(500).json({ message: 'Internal server error' })
}

export default errorHandler
