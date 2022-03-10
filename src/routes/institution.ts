import express from 'express'
import Institution from '../controllers/institution'

const InstitutionRouter = express.Router()

InstitutionRouter.post('/', Institution.createInstitution)

InstitutionRouter.get('/', Institution.getAllInstitution)

InstitutionRouter.get('/:id', Institution.getInstitution)

InstitutionRouter.put('/:id', Institution.updateInstitution)

InstitutionRouter.delete('/:id', Institution.deleteInstitution)

export default InstitutionRouter
