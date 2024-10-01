import { UserData } from './common'
import { BookBoxData } from './inventory'

export type Product = {
  title: string
  price: number
}

export type ProductGroup = {
  group_name: string
  products: BookBoxData[]
}

export type BuyData = {
  date: string
  time: string
  user: UserData
  remain_chips: number
  records: Array<Product>
}

export type ShopDisplay = {
  user: UserData
  chips: number
  products: ProductGroup[]
}
