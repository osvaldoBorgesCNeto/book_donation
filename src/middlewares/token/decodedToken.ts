import jwt from 'jsonwebtoken'
import config from '../../config/auth.config'
import { DecodedToken } from '../../interfaces/token'

const decodedToken = (confirmToken: string): DecodedToken => {
  const decoded = jwt.verify(confirmToken, config.secret)
  return decoded
}

export default decodedToken
