import { Request, Response, NextFunction } from 'express'
import { AdminBody, Admin, Admins } from '../interfaces/admin'
import AdminModel from '../models/admin'

const createAdmin = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const admin: AdminBody = req.body

  await AdminModel.createAdmin(admin)

  return res.status(201).json({ message: 'Admin created succesfully' })
}

const getAllAdmin = async (_req: Request, res: Response, _next: NextFunction): Promise<Admins> => {
  const allAdmin = await AdminModel.getAllAdmin()

  return res.status(200).json(allAdmin)
}

const getAdmin = async (req: Request, res: Response, _next: NextFunction): Promise<Admin> => {
  const id: number = parseInt(req.params.id)

  const admin = await AdminModel.getAdmin(id)

  return res.status(200).json(admin)
}

const updateAdmin = async (req: Request, res: Response, _next: NextFunction): Promise<Admin> => {
  const id: number = parseInt(req.params.id)
  const admin: AdminBody = req.body

  const editAdmin = await AdminModel.updateAdmin(id, admin)

  return res.status(200).json(editAdmin)
}

const deleteAdmin = async (req: Request, res: Response, _next: NextFunction): Promise<Admin> => {
  const id: number = parseInt(req.params.id)

  await AdminModel.deleteAdmin(id)

  return res.status(204).json({ message: 'Admin delete succesfully' })
}

export = {
  createAdmin,
  getAllAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin
}
