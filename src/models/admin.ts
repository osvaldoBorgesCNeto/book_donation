import { PrismaClient } from '@prisma/client'
import { Admin, AdminBody, Admins, BaseAdmin } from '../interfaces/admin'
const prisma = new PrismaClient()

const createAdmin = async (body: AdminBody, token: string): Promise<any> => {
  const result = await prisma.admin.create({
    data: {
      ...body,
      confirmToken: token,
      confirm: false
    }
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

const updateAdmin = async (id: number, body: AdminBody, confirmToken?: string): Promise<BaseAdmin | null> => {
  const editAdmin = await prisma.admin.update({
    where: { id },
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
      confirmToken: confirmToken
    }
  })
  if (body.email) {
    await prisma.admin.update({
      where: { id },
      data: {
        confirm: false
      }
    })
  }
  return editAdmin
}

const deleteAdmin = async (id: number): Promise<void> => {
  await prisma.admin.delete({ where: { id } })
}

export = {
  createAdmin,
  getAllAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin
}
