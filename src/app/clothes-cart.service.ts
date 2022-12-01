import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Clothe } from './clothes-list/clothe';
  //maneja la logica del carrito

@Injectable({
  providedIn: 'root'
})

export class ClothesCartService {

  private _totalPrice: number = 0;

  private _cartList: Clothe[] = [];
  cartList: BehaviorSubject<Clothe[]> = new BehaviorSubject(this._cartList);
  totalPrice: BehaviorSubject<number> = new BehaviorSubject(this._totalPrice);

  observablePrice : Observable <number> = this.totalPrice.asObservable();

  constructor() { }

  addToCart(clothe: Clothe) {
    let item = this._cartList.find((c1) => c1.name == clothe.name);
    if(!item){
      this._cartList.push({...clothe});
    }else{
      item.quantity += clothe.quantity;
    }
    console.log(this._cartList);

    this.cartList.next(this._cartList); //equivalente al emiit de eventos
    this.total();
  }
  public total():void{
    console.log(this._cartList);
    this._totalPrice = 0;
    for(let i = 0; i<this._cartList.length; i++){
     this._totalPrice += this._cartList[i].price * this._cartList[i].quantity;
   }

   this.totalPrice.next(this._totalPrice);
   }
}
