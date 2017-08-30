import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Customer } from '../model/customer'

@Injectable()
export class CheckoutCustomerService {

  constructor(private http:Http) { }

  checkout = (customer: Customer) => {
    return this.http.post('http://localhost:8080/rest/basket/confirm', customer)
  }

}
