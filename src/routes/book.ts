import express from 'express'
import Book from '../controllers/book'

const BookRouter = express.Router()

BookRouter.post('/', Book.createBook)

BookRouter.get('/', Book.getAllBook)

BookRouter.get('/:id', Book.getBook)

BookRouter.put('/:id', Book.updateBook)

BookRouter.delete('/:id', Book.deleteBook)

export default BookRouter
