import express from 'express'
import Admin from '../controllers/admin'
import validateAdmin from '../middlewares/validate/validateAdmin'

const AdminRouter = express.Router()

AdminRouter.post('/', validateAdmin, Admin.createAdmin)

AdminRouter.get('/', Admin.getAllAdmin)

AdminRouter.get('/:id', Admin.getAdmin)

AdminRouter.put('/:id', Admin.updateAdmin)

AdminRouter.delete('/:id', Admin.deleteAdmin)

export default AdminRouter
