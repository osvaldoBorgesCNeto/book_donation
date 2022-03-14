import express from 'express'
import Institution from '../controllers/institution'
import validateInstitution from '../middlewares/validate/validateInstitution'

const InstitutionRouter = express.Router()

InstitutionRouter.post('/', validateInstitution, Institution.createInstitution)

InstitutionRouter.get('/', Institution.getAllInstitution)

InstitutionRouter.get('/:id', Institution.getInstitution)

InstitutionRouter.put('/:id', validateInstitution, Institution.updateInstitution)

InstitutionRouter.delete('/:id', Institution.deleteInstitution)

export default InstitutionRouter
