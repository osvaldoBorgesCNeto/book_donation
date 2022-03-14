import { Admin, AdminBody, Admins, BaseAdmin } from '../interfaces/admin'
import sendEmail from '../middlewares/email/sendEmail'
import AdminModel from '../models/admin'
import createToken from '../middlewares/token/createToken'

const createAdmin = async (body: AdminBody): Promise<any> => {
  const confirmToken = createToken({ email: body.email })

  const admin = await AdminModel.createAdmin(body, confirmToken)

  await sendEmail(body.name, body.email, confirmToken, 'verify')

  return admin
}

const getAllAdmin = async (): Promise<Admins> => {
  const allAdmin = await AdminModel.getAllAdmin()

  return allAdmin
}

const getAdmin = async (id: number): Promise<Admin | null> => {
  const admin = await AdminModel.getAdmin(id)

  return admin
}

const updateAdmin = async (id: number, body: AdminBody): Promise<BaseAdmin | null> => {
  let editAdmin

  if (body.email) {
    const admin = await getAdmin(id)
    if (admin) {
      const confirmToken = createToken({ id, name: admin.name, email: admin.email })
      editAdmin = await AdminModel.updateAdmin(id, body, confirmToken)
      await sendEmail(body.name, body.email, confirmToken, 'verify-update')
    }
  } else {
    editAdmin = await AdminModel.updateAdmin(id, body)
  }

  return editAdmin
}

const deleteAdmin = async (id: number): Promise<any> => {
  const delete_ = await AdminModel.deleteAdmin(id)

  return delete_
}

export = {
  createAdmin,
  getAllAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin
}
