import { Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    loadChildren: './cart-module/cart-module.module#CartModule',
  }
]