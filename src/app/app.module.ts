import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import * as components from './components'
import * as services from './services';
import { SortproductPipe } from './pipes/sortproduct.pipe'

import './rxjs-operators';

@NgModule({
  declarations: [
    AppComponent,
    components.MenuComponent,
    components.ProductComponent,
    components.FooterComponent,
    components.HappyfaceComponent,
    SortproductPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' },
    services.ProductsService,
    services.CustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
