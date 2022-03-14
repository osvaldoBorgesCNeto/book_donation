import express from 'express'
import Book from '../controllers/book'
import validateBook from '../middlewares/validate/validateBook'

const BookRouter = express.Router()

BookRouter.post('/', validateBook, Book.createBook)

BookRouter.get('/', Book.getAllBook)

BookRouter.get('/:id', Book.getBook)

BookRouter.put('/:id', validateBook, Book.updateBook)

BookRouter.delete('/:id', Book.deleteBook)

export default BookRouter
