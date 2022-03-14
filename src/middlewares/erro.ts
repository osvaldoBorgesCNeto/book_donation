import { Request, Response, NextFunction } from 'express'
import HttpException from './error.middleware'

const erroMiddleware = (err: HttpException, _req: Request, res: Response, _next: NextFunction): any => {
  const errorStatusService = 500

  const status = err.statusCode || errorStatusService

  return res.status(status).json({ message: err.message })
}

export default erroMiddleware
