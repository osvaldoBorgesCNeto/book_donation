export interface BaseInstitution {
  name: string
  address: string
  city: string
  state: string
  adminId: number
}

export interface Institutions {
  [key: number]: BaseInstitution
}
