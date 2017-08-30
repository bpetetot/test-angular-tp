import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Product } from '../../../core-module/model/product'
import { CustomerService } from '../../../core-module/services/customer.service'

import { CheckoutCustomerService } from '../../services/checkout-customer.service'
import { Customer } from '../../model/customer'

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart: Product[] = []

  public customer: Customer = <Customer>{};

  constructor(private customerService: CustomerService, private checkoutService: CheckoutCustomerService, private router: Router) { }

  ngOnInit() {
    this.customerService.getCart().subscribe(products => {
      this.cart = products
    })
  }

  onSubmit() {
    console.log('submit')
    this.checkoutService.checkout(this.customer).subscribe(() => {
      this.router.navigate([''])
    }, () => {
      console.log('an error occured during checkout')
    })
  }

}
