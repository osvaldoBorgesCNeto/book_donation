import jwt from 'jsonwebtoken'
import config from '../../config/auth.config'

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256'
}

const createToken = (user: object): string => {
  const token = jwt.sign(user, config.secret, jwtConfig)
  return token
}

export default createToken
