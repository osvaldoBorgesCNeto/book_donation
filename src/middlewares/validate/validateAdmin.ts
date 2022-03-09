import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
const prisma = new PrismaClient()

const validateEmail = async (email: string): Promise<boolean> => {
  const result = await prisma.admin.findUnique({
    where: {
      email
    }
  })

  return Boolean(result)
}

const validateUser = async (user: string): Promise<boolean> => {
  const result = await prisma.admin.findUnique({
    where: {
      user
    }
  })

  return Boolean(result)
}

const validateAdmin = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const { email, user } = req.body

  const isValidEmail = await validateEmail(email)
  if (isValidEmail) return next({ statusCode: 409, message: 'Email already registered' })

  const isValidUser = await validateUser(user)
  if (isValidUser) return next({ statusCode: 409, message: 'User already registered' })

  return next()
}

export default validateAdmin
