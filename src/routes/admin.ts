import express from 'express'
import Admin from '../controllers/admin'

const AdminRouter = express.Router()

AdminRouter.post('/', Admin.createAdmin)

AdminRouter.get('/', Admin.getAllAdmin)

AdminRouter.get('/:id', Admin.getAdmin)

AdminRouter.put('/:id')

AdminRouter.delete('/:id')

export = AdminRouter
