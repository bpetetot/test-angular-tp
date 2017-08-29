import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../model/product'
import { ProductsService, CustomerService } from '../../services'

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
    console.log(`add to cart : ${this.item.title}`)
    this.productsService.decreaseStock(this.item)
    this.customerService.addProduct(this.item)
    this.onAdded.emit()
  }

}
