import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //api bağlantı için eklendi

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [ //kendi modullerimizi buraya koyuyoruz
    AppComponent,
    CategoryComponent,
    ProductComponent,
    NaviComponent
  ],
  imports: [ //dışarıdan bizim yazmadığımızı modulleride buraya koyuyoruz
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
