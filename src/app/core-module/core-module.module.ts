import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerService } from './services/customer.service';

import { SortproductPipe } from './pipes/sortproduct.pipe'

import '../rxjs-operators';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SortproductPipe,
  ],
  providers: [
    CustomerService,
  ],
  exports: [
    SortproductPipe,
  ]
})
export class CoreModule { }
