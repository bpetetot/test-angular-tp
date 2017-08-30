import { Component, OnInit } from '@angular/core';
import { Product } from "../../model/product";
import { ProductsService, CustomerService } from '../../services'

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
