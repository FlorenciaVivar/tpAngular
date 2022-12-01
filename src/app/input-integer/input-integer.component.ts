import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clothe } from "../clothes-list/clothe";

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  "quantity": number ;

  @Input()
  "max": number ;

  @Output()
  "quantityChange": EventEmitter<number>= new EventEmitter<number>();

  @Output()
  "maxReached": EventEmitter<string>= new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else
    this.maxReached.emit("Se alcanzo el máximo");
  }

  downQuantity(): void {
    if(this.quantity > 1)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }

 changeQuantity(event: { key: any; }): void {
    console.log(event.key);
   this.quantityChange.emit(this.quantity);

 }
 onlyNumber(e: any): void {
  if (!((e.key) <= 9 && (e.key) > 0) || (e.key == " ")) {
    e.preventDefault();
   }
  }
  verifyQuantity(e: any): void {

    if (this.quantity > this.max) {
      this.maxReached.emit("Excede el maximo de stock disponible");
      this.quantity = this.max;
      this.quantityChange.emit(this.quantity);
    }
    else if (this.quantity < 0) {
      this.maxReached.emit("Ingrese numero mayor a cero");
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
  }

}
