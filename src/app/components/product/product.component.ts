import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../model/product'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() item: Product;
  @Output() onAddCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    console.log(`add to cart : ${this.item.title}`)
    this.item.stock -= 1;
    this.onAddCart.emit(this.item)
  }

}
