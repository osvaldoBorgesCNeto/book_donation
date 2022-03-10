import { Request, Response, NextFunction } from 'express'
import { BaseBook, Books } from '../interfaces/book'
import BookModel from '../models/book'

const createBook = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const book: BaseBook = req.body

  await BookModel.createBook(book)

  return res.status(201).json({ message: 'Book created succesfully' })
}

const getAllBook = async (_req: Request, res: Response, _next: NextFunction): Promise<Books> => {
  const allBook = await BookModel.getAllBook()

  return res.status(200).json(allBook)
}

const getBook = async (req: Request, res: Response, _next: NextFunction): Promise<BaseBook> => {
  const id: number = parseInt(req.params.id)

  const book = await BookModel.getBook(id)

  return res.status(200).json(book)
}

const updateBook = async (req: Request, res: Response, _next: NextFunction): Promise<BaseBook> => {
  const id: number = parseInt(req.params.id)
  const book: BaseBook = req.body

  const editBook = await BookModel.updateBook(id, book)

  return res.status(200).json(editBook)
}

const deleteBook = async (req: Request, res: Response, _next: NextFunction): Promise<BaseBook> => {
  const id: number = parseInt(req.params.id)

  await BookModel.deleteBook(id)

  return res.status(204).json({ message: 'Book delete succesfully' })
}

export = {
  createBook,
  getAllBook,
  getBook,
  updateBook,
  deleteBook
}
