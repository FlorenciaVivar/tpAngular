import { Component, OnInit } from '@angular/core';
import { clothe } from '../clothes-list/clothe';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  total: number = 1000;
  clothes: clothe [] = [
    {
      "name" :"w's Santorini Island",
      "type":"remera",
      "price": 15000,
      "stock": 15,
      "image":"assets/img/santorini.jpg",
      "sale":false,
    },
    {
      "name" :"w's Creta Island",
      "type":"pantalon",
      "price":35000,
      "stock":0,
      "image":"assets/img/creta.jpg",
      "sale":true,
    },
   {
      "name" :"w's Hvar Logo Hat",
      "type":"gorra",
      "price":12500,
      "stock":10,
      "image":"assets/img/hvar.jpg",
      "sale":false,
    }
  ]
  constructor() {

  //   ngOnInit(): void {
  //   //    this.clothes.forEach(clothe=>{
  //   //       this.total += clothe.quantity * clothe.price


  //   // }

  //     // )

  // }

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
