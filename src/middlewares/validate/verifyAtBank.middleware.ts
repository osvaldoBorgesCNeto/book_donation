import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const verifyAtBank = async (value_: any, key_: string, collection: string): Promise<boolean> => {
  const result = await prisma[collection].findUnique({
    where: {
      [key_]: value_
    }
  })

  return Boolean(result)
}

export default verifyAtBank
