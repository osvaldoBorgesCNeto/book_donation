export interface BaseAdmin {
  name: string
  email: string
  user: string
}

export interface AdminBody extends BaseAdmin {
  password: string
  confirmToken?: string
}

export interface Admin extends BaseAdmin {
  institution: any
}

export interface Admins {
  [key: number]: Admin
}
