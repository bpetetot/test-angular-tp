import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { CoreModule } from '../core-module/core-module.module'
import { CheckoutCustomerService } from './services/checkout-customer.service';
import { CartComponent } from './components/cart/cart.component';

import '../rxjs-operators';

@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    CoreModule,
    FormsModule,
  ],
  providers: [
    CheckoutCustomerService,
  ],
})
export class CartModule { }
