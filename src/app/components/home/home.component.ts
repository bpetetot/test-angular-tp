import { Component, OnInit } from '@angular/core';
import { Product } from "../../core-module/model/product";
import { ProductsService } from '../../services/products.service'
import { CustomerService } from '../../core-module/services/customer.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: Product[] = []
  public sort = 'stock'

  constructor(private productsService: ProductsService, private customerService: CustomerService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(p => this.products = p)
  }

  updateTotal() {
    console.log('must update total')
  }

  hasProducts = () => this.productsService.hasProducts()

  toggleSort = () => {
    if (this.sort === 'stock') {
      this.sort = 'price'
    } else {
      this.sort = 'stock'
    }
  }
}
