import { Request, Response, NextFunction } from 'express'
import verifyService from '../service/verifyEmail'

const verifyEmail = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const confirmToken: string = req.params.confirmToken

  const admin = await verifyService.verifyEmail(confirmToken)

  return res.status(200).json(admin)
}

const verifyEmailUpdate = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const confirmToken: string = req.params.confirmToken

  const admin = await verifyService.verifyEmailUpdate(confirmToken)

  return res.status(200).json(admin)
}

const recoverEmail = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const confirmToken: string = req.params.confirmToken

  const admin = await verifyService.recoverEmail(confirmToken)

  return res.status(200).json(admin)
}

export = {
  verifyEmail,
  verifyEmailUpdate,
  recoverEmail
}
