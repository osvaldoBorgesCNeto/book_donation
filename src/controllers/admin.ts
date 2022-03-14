import { Request, Response, NextFunction } from 'express'
import { AdminBody } from '../interfaces/admin'
import AdminService from '../service/admin'

const createAdmin = async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
  const admin: AdminBody = req.body

  await AdminService.createAdmin(admin)

  return res.status(201).json({ message: 'Admin created succesfully! Please check your email' })
}

const getAllAdmin = async (_req: Request, res: Response, _next: NextFunction): Promise<any> => {
  const allAdmin = await AdminService.getAllAdmin()

  return res.status(200).json(allAdmin)
}

const getAdmin = async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
  const id: number = parseInt(req.params.id)

  const admin = await AdminService.getAdmin(id)

  return res.status(200).json(admin)
}

const updateAdmin = async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
  const id: number = parseInt(req.params.id)
  const admin: AdminBody = req.body

  const editAdmin = await AdminService.updateAdmin(id, admin)

  return res.status(200).json(editAdmin)
}

const deleteAdmin = async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
  const id: number = parseInt(req.params.id)

  await AdminService.deleteAdmin(id)

  return res.status(204).json({ message: 'Admin delete succesfully' })
}

export = {
  createAdmin,
  getAllAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin
}
