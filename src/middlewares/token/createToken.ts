import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const secretKey = process.env.JWT_SECRET

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256'
}

const createToken = (user: object): string => {
  const token = jwt.sign(user, secretKey, jwtConfig)
  return token
}

export default createToken
