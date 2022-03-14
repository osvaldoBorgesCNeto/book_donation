import { Request, Response, NextFunction } from 'express'
import verifyAtBank from './verifyAtBank.middleware'

const validateInstitution = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { name } = req.body

  const isValidName = await verifyAtBank(name, 'name', 'institution')
  if (isValidName) return next({ statusCode: 409, message: 'Institution name already registered' })

  return next()
}

export default validateInstitution
