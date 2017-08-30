import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../core-module/model/product'
import { CustomerService } from '../../core-module/services/customer.service'

import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() item: Product;
  @Output() onAdded = new EventEmitter()

  constructor(private customerService: CustomerService, private productsService: ProductsService) { }

  addToCart() {
    this.customerService.addProduct(this.item).subscribe(() => {
      this.productsService.decreaseStock(this.item)
      this.onAdded.emit()
    })
  }

}
