import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { DecodedToken } from '../../interfaces/token'

dotenv.config()

const secretKey = process.env.JWT_SECRET

const decodedToken = (confirmToken: string): DecodedToken => {
  const decoded = jwt.verify(confirmToken, secretKey)
  return decoded
}

export default decodedToken
