export interface Users{
  data:User[]|[],
  status:string,
  error:string|null
}

export interface User{
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string
}