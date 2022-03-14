import { Request, Response, NextFunction } from 'express'
import verifyAtBank from './verifyAtBank.middleware'

const verifyPasswordLength = (password: string): boolean => {
  const regex = /^(?=.*[a-zA-Z0-9]).{8,32}$/
  return Boolean(!regex.test(password))
}

const validateAdmin = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { email, user, password } = req.body

  if (email) {
    const isValidEmail = await verifyAtBank(email, 'email', 'admin')
    if (isValidEmail) return next({ statusCode: 409, message: 'Email already registered' })
  } else {
    return next({ statusCode: 400, message: 'The \'email\' param is missing' })
  }

  if (user) {
    const isValidUser = await verifyAtBank(user, 'user', 'admin')
    if (isValidUser) return next({ statusCode: 409, message: 'User already registered' })
  } else {
    return next({ statusCode: 400, message: 'The \'user\' param is missing' })
  }

  if (password) {
    const passwordLength = verifyPasswordLength(password)
    if (passwordLength) return next({ statusCode: 409, message: 'The password must be between 8 to 32 digit' })
  } else {
    return next({ statusCode: 400, message: 'The \'password\' param is missing' })
  }

  return next()
}

const validateAdminUpdate = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { email, password } = req.body

  if (email) {
    const isValidEmail = await verifyAtBank(email, 'email', 'admin')
    if (isValidEmail) return next({ statusCode: 409, message: 'Email already registered' })
  }

  if (password) {
    const passwordLength = verifyPasswordLength(password)
    if (passwordLength) return next({ statusCode: 409, message: 'The password must be between 8 to 32 digit' })
  }

  return next()
}

export = {
  validateAdmin,
  validateAdminUpdate
}
