import { Request, Response, NextFunction } from 'express'
import verifyAtBank from './verifyAtBank.middleware'

const verifyPasswordLength = (password: string): boolean => {
  const regex = /^(?=.*[a-zA-Z0-9]).{8,32}$/
  return Boolean(!regex.test(password))
}

const validateAdmin = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { email, user, password } = req.body

  const isValidEmail = await verifyAtBank(email, 'email', 'admin')
  if (isValidEmail) return next({ statusCode: 409, message: 'Email already registered' })

  const isValidUser = await verifyAtBank(user, 'user', 'admin')
  if (isValidUser) return next({ statusCode: 409, message: 'User already registered' })

  const passwordLength = verifyPasswordLength(password)
  if (passwordLength) return next({ statusCode: 409, message: 'The password must be between 8 to 32 digit' })

  return next()
}

export default validateAdmin
