import { Component, OnInit } from "@angular/core";
import { Product } from "./core-module/model/product";
import { CustomerService } from './core-module/services/customer.service'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  public total = 0;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCart()
      .mergeMap(() => this.customerService.total())
      .subscribe(total => this.total = total)
  }

}
