import { Injectable } from '@angular/core';
import { Clothe } from './clothes-list/clothe';
  //maneja la logica del carrito

@Injectable({
  providedIn: 'root'
})

export class ClothesCartService {

  cartList: Clothe[] = [];

  constructor() { }

  // addToCart(clothe: Clothe) {
  //   let item: Clothe = this.cartList.find((v1) => v1.name == clothe.name);
  //   if(!item){
  //     this.cartList.push({... clothe});
  //   }else{
  //     item.quantity += clothe.quantity;
  //   }
  // }
}
