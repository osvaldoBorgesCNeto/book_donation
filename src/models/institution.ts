import { PrismaClient } from '@prisma/client'
import { BaseInstitution, Institutions } from '../interfaces/institution'
const prisma = new PrismaClient()

const createInstitution = async (body: BaseInstitution): Promise<any> => {
  const newInstitution = await prisma.institution.create({
    data: { ...body }
  })

  return newInstitution
}

const getAllInstitution = async (): Promise<Institutions> => {
  const allInstitution = await prisma.institution.findMany({
    include: { book: true }
  })

  return allInstitution
}

const getInstitution = async (id: number): Promise<BaseInstitution | null> => {
  const institution = await prisma.institution.findUnique({
    where: {
      id: id
    },
    include: { book: true }
  })

  return institution
}

const updateInstitution = async (id: number, body: BaseInstitution): Promise<BaseInstitution | null> => {
  const editInstitution = await prisma.institution.update({
    where: { id },
    data: {
      address: body.address,
      city: body.city,
      state: body.state,
      adminId: body.adminId
    },
    include: { book: true }
  })
  return editInstitution
}

const deleteInstitution = async (id: number): Promise<void> => {
  await prisma.institution.delete({ where: { id } })
}

export = {
  createInstitution,
  getAllInstitution,
  getInstitution,
  updateInstitution,
  deleteInstitution
}
