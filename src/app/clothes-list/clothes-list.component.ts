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

  constructor() { }

  ngOnInit(): void {
  }

}
