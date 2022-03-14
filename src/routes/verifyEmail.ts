import express from 'express'
import Email from '../controllers/verifyEmail'
import validateVerify from '../middlewares/validate/validateVerify'

const VerifyRouter = express.Router()

VerifyRouter.get('/verify/:confirmToken', validateVerify, Email.verifyEmail)

VerifyRouter.get('/verify-update/:confirmToken', validateVerify, Email.verifyEmailUpdate)

VerifyRouter.get('/recover/:confirmToken', validateVerify, Email.recoverEmail)

export default VerifyRouter
