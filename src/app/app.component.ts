import { Component, OnInit } from "@angular/core";
import { Product } from "./model/product";
import { CustomerService } from './services'

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
