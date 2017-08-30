import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../core-module/services/customer.service'

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public count = 0;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.count().subscribe(count => this.count = count)
  }

}
