export interface IProducts {
  
  name: string,
  amount: string,
}

export interface Products extends IProducts {
  id: number,
}

export interface IUsers {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface Users extends IUsers {
  id: number,
}

export interface IOrders {
  id: number,
  userId: number,
  productsIds: [number],
}