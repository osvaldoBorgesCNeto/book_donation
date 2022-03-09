import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main (): Promise<any> {
  const newUser = await prisma.admin.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      user: 'Alice',
      password: '123456'
    }
  })
  console.log('Created new user: ', newUser)

  const newInstitution = await prisma.institution.create({
    data: {
      name: 'Teste',
      address: 'teste - teste, 123',
      adminId: 1
    }
  })

  console.log('Created new institution: ', newInstitution)

  const allUsers = await prisma.admin.findMany({
    include: { institution: true }
  })
  console.log('All users: ')
  console.dir(allUsers, { depth: null })
  return newUser
}

main()
  .catch((e) => {
    console.log('ERRRO')
    console.error(e)
  })
