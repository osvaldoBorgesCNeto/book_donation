import { PrismaClient } from '@prisma/client'
import { BaseAdmin } from '../interfaces/admin'
const prisma = new PrismaClient()

const verifyEmail = async (confirmToken: string): Promise<BaseAdmin | null> => {
  const editEmail = await prisma.admin.update({
    where: { confirmToken },
    data: {
      confirm: true
    }
  })
  return editEmail
}

const recoverEmail = async (id: number, email: string): Promise<BaseAdmin | null> => {
  const editEmail = await prisma.admin.update({
    where: { id },
    data: {
      email
    }
  })
  return editEmail
}

export = {
  verifyEmail,
  recoverEmail
}
