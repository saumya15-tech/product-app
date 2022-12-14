import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    HeaderComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
