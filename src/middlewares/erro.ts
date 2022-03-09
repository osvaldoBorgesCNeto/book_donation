import { Error } from '../interfaces/error'

const erroMiddleware = (err: Error, _req, res, _next): any => {
  const errorStatusService = 500

  const status = err.code || errorStatusService

  return res.status(status).json({ message: err.message })
}

export = erroMiddleware
