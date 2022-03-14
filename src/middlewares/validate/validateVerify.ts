import { Request, Response, NextFunction } from 'express'
import verifyAtBank from './verifyAtBank.middleware'

const validateVerify = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const confirmToken: string = req.params.confirmToken

  const isValidAdmin = await verifyAtBank(confirmToken, 'confirmToken', 'admin')
  if (!isValidAdmin) return next({ statusCode: 404, message: 'Admin Not found' })

  return next()
}

export default validateVerify
