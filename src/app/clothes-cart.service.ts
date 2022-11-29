import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clothe } from './clothes-list/clothe';
  //maneja la logica del carrito

@Injectable({
  providedIn: 'root'
})

export class ClothesCartService {

  private _cartList: Clothe[] = [];
  cartList: BehaviorSubject<Clothe[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(clothe: Clothe) {
    let item = this._cartList.find((v1) => v1.name == clothe.name);
    if(!item){
      this._cartList.push({...clothe});
    }else{
      item.quantity += clothe.quantity;
    }
     this.cartList.next(this._cartList); //equivalente al emiit de eventos
  }
}
