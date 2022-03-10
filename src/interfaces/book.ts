export interface BaseBook {
  name: string
  edition: string
  year: number
  release_date: Date
  condition: string
  institutionId: any
  quantity: number
  book_address: string
}

export interface Books {
  [key: number]: BaseBook
}
