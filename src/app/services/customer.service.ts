import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Product } from '../model/product'

@Injectable()
export class CustomerService {

  public cart: Product[] = []

  constructor(private http: Http) { }

  addProduct = product => this.http.post("http://localhost:8080/rest/basket", product)
    .do(() => this.cart.push(product))

  getCart = () =>
    this.http
      .get("http://localhost:8080/rest/basket")
      .map(resp => resp.json())
      .map(jsonArray => jsonArray.map(json => new Product().fromJSON(json)))
      .do(p => this.cart = p)


  getTotal = () => this.cart.map(({ price }) => price).reduce((a, c) => a + c, 0)
}
