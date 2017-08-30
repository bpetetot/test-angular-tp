import { Serializable } from './serializable'

export class Product extends Serializable {

  public title: string
  public description: string
  public photo: string
  public price: number
  public stock: number

  constructor() {
    super()
  }

  isTheLast = () => this.stock === 1;

  isAvailable = () => this.stock > 0;

  static clone = product => {
    const newProduct = new Product()
    newProduct.title = product.title
    newProduct.description = product.description
    newProduct.photo = product.photo
    newProduct.price = product.price
    newProduct.stock = product.stock
    return newProduct
  }
}
