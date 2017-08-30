import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import './rxjs-operators';

import { ProductsService } from './services/products.service';
import { CustomerService } from './services/customer.service';
import { CheckoutCustomerService } from './services/checkout-customer.service';

import { SortproductPipe } from './pipes/sortproduct.pipe'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { HappyfaceComponent } from './components/happyface/happyface.component';

import { routes } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent,
    HappyfaceComponent,
    SortproductPipe,
    HomeComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' },
    ProductsService,
    CustomerService,
    CheckoutCustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
