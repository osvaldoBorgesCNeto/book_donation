import { Request, Response, NextFunction } from 'express'
import verifyAtBank from './verifyAtBank.middleware'

const validateBook = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { name } = req.body

  const isValidName = await verifyAtBank(name, 'name', 'book')
  if (isValidName) return next({ statusCode: 409, message: 'Book name already registered' })

  return next()
}

export default validateBook
