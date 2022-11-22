import { Component, OnInit } from '@angular/core';
import { ClothesCartService } from '../clothes-cart.service';
import { Clothe } from '../clothes-list/clothe';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  total: number = 1000;
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
    throw new Error('Method not implemented.');
  }
}
