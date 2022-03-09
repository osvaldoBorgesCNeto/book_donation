import { PrismaClient } from '@prisma/client'
import { Admin, AdminBody, Admins } from '../interfaces/admin'
const prisma = new PrismaClient()

const createAdmin = async (body: AdminBody): Promise<any> => {
  const result = await prisma.admin.create({
    data: { ...body }
  })

  return result
}

const getAllAdmin = async (): Promise<Admins> => {
  const allAdmin: Admins = await prisma.admin.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      user: true,
      institution: {
        select: {
          id: true,
          name: true,
          address: true
        }
      }
    }
  })

  return allAdmin
}

const getAdmin = async (id: number): Promise<Admin | null> => {
  const admin = await prisma.admin.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      name: true,
      email: true,
      user: true,
      institution: {
        select: {
          id: true,
          name: true,
          address: true
        }
      }
    }
  })

  return admin
}

const updateAdmin = async (id: number, body: AdminBody): Promise<any> => {
  const editAdmin = await prisma.admin.update({
    where: { id },
    data: { ...body }
  })
  return editAdmin
}

const deleteAdmin = async (id: number): Promise<any> => {
  const delAdmin = await prisma.admin.delete({ where: { id } })
  return delAdmin
}

export = {
  createAdmin,
  getAllAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin
}
