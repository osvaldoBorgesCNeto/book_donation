import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main (): Promise<any> {
  await prisma.admin.deleteMany()
  await prisma.institution.deleteMany()
  await prisma.book.deleteMany()

  console.log('Seeding...')

  const newUser = await prisma.admin.create({
    data: {
      name: 'Teste',
      email: 'teste@prisma.io',
      user: 'Teste User',
      password: '123456789',
      confirmToken: 'any',
      confirm: true
    }
  })
  console.log('Created new user: ', newUser)

  const newInstitution = await prisma.institution.create({
    data: {
      name: 'Teste Institution',
      address: 'teste - teste, 123',
      city: 'Teste City',
      state: 'Teste State',
      adminId: 1
    }
  })

  console.log('Created new institution: ', newInstitution)

  const newBook = await prisma.book.create({
    data: {
      name: 'Teste Book',
      edition: '2',
      year: 2000,
      release_date: '2020-03-19T14:21:00.208Z',
      condition: 'novo',
      institutionId: 1,
      quantity: 2,
      book_address: 'Fileira 2'
    }
  })

  console.log('Created new book: ', newBook)
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async (): Promise<any> => {
    await prisma.$disconnect()
  })
