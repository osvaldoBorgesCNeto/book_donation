import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const validateEmail = async (email): Promise<boolean> => {
  const result = await prisma.admin.findUnique({
    where: {
      email
    }
  })

  return Boolean(result)
}

const validateUser = async (user): Promise<boolean> => {
  const result = await prisma.admin.findUnique({
    where: {
      user
    }
  })

  return Boolean(result)
}

const validateAdmin = async (req, _res, next): Promise<any> => {
  const { email, user } = req.body

  const isValidEmail = await validateEmail(email)
  if (isValidEmail) next({ code: 409, message: 'Email already registered' })

  const isValidUser = await validateUser(user)
  if (isValidUser) next({ code: 409, message: 'User already registered' })

  next()
}

export = {
  validateAdmin
}
