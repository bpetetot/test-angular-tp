import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Product } from '../model/product'

@Injectable()
export class CustomerService {

  public cart$: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor(private http: Http) { }

  total = () => this.cart$.map(products => products.map(({ price }) => price).reduce((a, b) => a + b, 0));

  count = () => this.cart$.map(products => products.length);

  addProduct = product => this.http.post("http://localhost:8080/rest/basket", product)
    .do(() => this.cart$.next([...this.cart$.getValue(), product]))

  getCart = () =>
    this.http
      .get("http://localhost:8080/rest/basket")
      .map(resp => resp.json())
      .map(jsonArray => jsonArray.map(json => new Product().fromJSON(json)))
      .do(p => this.cart$.next(p))

}
