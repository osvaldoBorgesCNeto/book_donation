import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import Admin from './routes/admin'
import Book from './routes/book'
import Institution from './routes/institution'
import erroMiddleware from './middlewares/erro'

dotenv.config()

const PORT = parseInt(process.env.PORT as string, 10) | 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/admin', Admin)

app.use('/book', Book)

app.use('/institution', Institution)

app.use(erroMiddleware)

app.listen(PORT, () =>
  console.log(`Servidor ligado na PORT: ${PORT}`)
)
