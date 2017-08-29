import { Component, OnInit } from "@angular/core";
import { Product } from "./model/product";
import { ProductsService, CustomerService } from './services'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public total = 0;
  public products: Product[] = []
  public sort = 'stock'

  constructor(private productsService: ProductsService, private customerService: CustomerService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(p => this.products = p)
    this.customerService.getCart().subscribe(() => {
      this.total = this.customerService.getTotal()
    })
  }

  updateTotal() {
    this.total = this.customerService.getTotal()
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
