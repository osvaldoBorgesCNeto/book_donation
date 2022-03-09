import express from 'express'
import rescue from 'express-rescue'
import Admin from '../controllers/admin'
import validateAdmin from '../middlewares/auth/validateAdmin'

const AdminRouter = express.Router()

AdminRouter.post('/', rescue(validateAdmin), Admin.createAdmin)

AdminRouter.get('/', Admin.getAllAdmin)

AdminRouter.get('/:id', Admin.getAdmin)

AdminRouter.put('/:id')

AdminRouter.delete('/:id')

export = AdminRouter
