import { Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { CartComponent } from './cart-module/components/cart/cart.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  }
]