import { Component, OnInit } from '@angular/core';
import { clothe } from './clothe';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  clothes: clothe [] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(clothes: clothe): void {
    if(clothes.quantity < clothes.stock)
    clothes.quantity++;
  }
  downQuantity(clothes: clothe): void {
    if(clothes.quantity>0)
    clothes.quantity--;
  }

}
