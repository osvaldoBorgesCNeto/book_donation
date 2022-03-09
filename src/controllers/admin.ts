import { AdminBody, Admin, Admins } from '../interfaces/admin'
import AdminModel from '../models/admin'

const createAdmin = async (req: any, res: any, _next): Promise<void> => {
  const admin: AdminBody = req.body

  await AdminModel.createAdmin(admin)

  return res.status(201).json({ message: 'Admin created succesfully' })
}

const getAllAdmin = async (_req: any, res: any, _next): Promise<Admins> => {
  const allAdmin = await AdminModel.getAllAdmin()

  return res.status(200).json(allAdmin)
}

const getAdmin = async (req: any, res: any, _next): Promise<Admin> => {
  const { id } = req.params

  const admin = await AdminModel.getAdmin(parseInt(id))

  return res.status(200).json(admin)
}

export = {
  createAdmin,
  getAllAdmin,
  getAdmin
}
