import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClothesAboutComponent } from './clothes-about/clothes-about.component';
import { ClothesClothesComponent } from './clothes-clothes/clothes-clothes.component';
import { AppRoutingModule } from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { ClothesContactComponent } from './clothes-contact/clothes-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    ShoppingCartComponent,
    ClothesAboutComponent,
    ClothesClothesComponent,
    InputIntegerComponent,
    ClothesContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
