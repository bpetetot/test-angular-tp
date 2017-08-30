import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Product } from "../core-module/model/product";


@Injectable()
export class ProductsService {
  public products: Product[] = [];

  constructor(private http: Http) { }

  getProducts = () =>
    this.http
      .get("http://localhost:8080/rest/products")
      .map(resp => resp.json())
      .map(jsonArray => jsonArray.map(json => new Product().fromJSON(json)))
      .do(p => this.products = p)

  decreaseStock = product => (product.stock -= 1);

  hasProducts = () =>
    this.products.map(p => p.stock).reduce((a, v) => a + v, 0) !== 0;
}
