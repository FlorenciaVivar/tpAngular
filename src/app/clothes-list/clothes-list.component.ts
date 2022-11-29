import { Component, OnInit } from '@angular/core';
import { ClothesCartService } from '../clothes-cart.service';
import { Clothe } from './clothe';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  clothes: Clothe [] = [
  {
    "name" :"w's Santorini Island",
    "type":"remera",
    "price": 15000,
    "stock": 15,
    "image":"assets/img/santorini.jpg",
    "sale":false,
    "quantity":0,
  },
  {
    "name" :"w's Creta Island",
    "type":"pantalon",
    "price":35000,
    "stock":0,
    "image":"assets/img/creta.jpg",
    "sale":true,
    "quantity":0,
  },
 {
    "name" :"w's Hvar Logo Hat",
    "type":"gorra",
    "price":12500,
    "stock":10,
    "image":"assets/img/hvar.jpg",
    "sale":false,
    "quantity":0,
  }
]

  constructor(private shoppingCart: ClothesCartService) {
  }

  ngOnInit(): void {
  }

  addToCart(clothe: Clothe): void{
    this.shoppingCart.addToCart (clothe);
    clothe.stock -= clothe.quantity;
    clothe.quantity = 0;
  }
  maxReached(m:string){
    alert(m);
  }
}
