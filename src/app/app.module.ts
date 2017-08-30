import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { CoreModule } from './core-module/core-module.module'

import './rxjs-operators';

import { ProductsService } from './services/products.service';

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component';
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
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CoreModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' },
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
