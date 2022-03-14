import { BaseAdmin } from '../interfaces/admin'
import recoverEmailAdmin from '../middlewares/email/recoverEmailAdmin'
import decodedToken from '../middlewares/token/decodedToken'
import verifyModel from '../models/verifyEmail'

const verifyEmail = async (confirmToken: string): Promise<BaseAdmin | null> => {
  const admin = await verifyModel.verifyEmail(confirmToken)

  return admin
}

const verifyEmailUpdate = async (confirmToken: string): Promise<BaseAdmin | null> => {
  const admin = await verifyModel.verifyEmail(confirmToken)
  const { name, email } = decodedToken(confirmToken)

  await recoverEmailAdmin(name, email, confirmToken)

  return admin
}

const recoverEmail = async (confirmToken: string): Promise<BaseAdmin | null> => {
  const { id, email } = decodedToken(confirmToken)

  const editAdmin = await verifyModel.recoverEmail(id, email)

  return editAdmin
}

export = {
  verifyEmail,
  verifyEmailUpdate,
  recoverEmail
}
