import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import Admin from './routes/admin'

dotenv.config()

const PORT = parseInt(process.env.PORT as string, 10) | 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/admin', Admin)

app.listen(PORT, () =>
  console.log(`Servidor ligado na PORT: ${PORT}`)
)
