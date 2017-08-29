import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component'
import * as components from './components'
import * as services from './services';
import { SortproductPipe } from './pipes/sortproduct.pipe'

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
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' },
    services.ProductsService,
    services.CustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
