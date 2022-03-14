import express from 'express'
import Admin from '../controllers/admin'
import validate from '../middlewares/validate/validateAdmin'

const AdminRouter = express.Router()

AdminRouter.post('/', validate.validateAdmin, Admin.createAdmin)

AdminRouter.get('/', Admin.getAllAdmin)

AdminRouter.get('/:id', Admin.getAdmin)

AdminRouter.put('/:id', validate.validateAdminUpdate, Admin.updateAdmin)

AdminRouter.delete('/:id', Admin.deleteAdmin)

export default AdminRouter
