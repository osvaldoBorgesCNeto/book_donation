import { Request, Response, NextFunction } from 'express'
import { BaseInstitution, Institutions } from '../interfaces/institution'
import InstitutionModel from '../models/institution'

const createInstitution = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const institution: BaseInstitution = req.body

  await InstitutionModel.createInstitution(institution)

  return res.status(201).json({ message: 'Institution created succesfully' })
}

const getAllInstitution = async (_req: Request, res: Response, _next: NextFunction): Promise<Institutions> => {
  const allInstitution = await InstitutionModel.getAllInstitution()

  return res.status(200).json(allInstitution)
}

const getInstitution = async (req: Request, res: Response, _next: NextFunction): Promise<BaseInstitution> => {
  const id: number = parseInt(req.params.id)

  const institution = await InstitutionModel.getInstitution(id)

  return res.status(200).json(institution)
}

const updateInstitution = async (req: Request, res: Response, _next: NextFunction): Promise<BaseInstitution> => {
  const id: number = parseInt(req.params.id)
  const institution: BaseInstitution = req.body

  const editInstitution = await InstitutionModel.updateInstitution(id, institution)

  return res.status(200).json(editInstitution)
}

const deleteInstitution = async (req: Request, res: Response, _next: NextFunction): Promise<BaseInstitution> => {
  const id: number = parseInt(req.params.id)

  await InstitutionModel.deleteInstitution(id)

  return res.status(204).json({ message: 'Institution delete succesfully' })
}

export = {
  createInstitution,
  getAllInstitution,
  getInstitution,
  updateInstitution,
  deleteInstitution
}
