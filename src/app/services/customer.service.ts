import { Injectable } from '@angular/core';

import { Product } from '../model/product'

@Injectable()
export class CustomerService {

  public cart : Product[] = []

  constructor() { }

  addProduct = product => {
    const currentProduct = this.cart.filter(p => product.title === p.title)
    if (currentProduct && currentProduct.length === 1) {
      currentProduct[0].stock += 1
    } else {
      const newProduct = Product.clone(product);
      newProduct.stock = 1
      this.cart.push(newProduct)
    }
  }

  getTotal = () => this.cart.map(({ price, stock }) => price * stock).reduce((a, c) => a + c, 0)
}
