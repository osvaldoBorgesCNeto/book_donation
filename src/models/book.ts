import { PrismaClient } from '@prisma/client'
import { BaseBook, Books } from '../interfaces/book'
const prisma = new PrismaClient()

const createBook = async (body: BaseBook): Promise<any> => {
  const result = await prisma.book.create({
    data: { ...body }
  })

  return result
}

const getAllBook = async (): Promise<Books> => {
  const allBook = await prisma.book.findMany({
    include: { institution: true }
  })

  return allBook
}

const getBook = async (id: number): Promise<BaseBook | null> => {
  const book = await prisma.book.findUnique({
    where: {
      id: id
    },
    include: { institution: true }
  })

  return book
}

const updateBook = async (id: number, body: BaseBook): Promise<BaseBook | null> => {
  const editBook = await prisma.book.update({
    where: { id },
    data: {
      edition: body.edition,
      condition: body.condition,
      institutionId: body.institutionId
    },
    include: { institution: true }
  })
  return editBook
}

const deleteBook = async (id: number): Promise<void> => {
  await prisma.book.delete({ where: { id } })
}

export = {
  createBook,
  getAllBook,
  getBook,
  updateBook,
  deleteBook
}
