import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  clothesSantorini = {
    "name" :"W's Santorini Island",
    "type":"Remera",
    "price":"15000",
    "stock":"15",
    "image":"assets/img/santorini.jpg"
  }
  clothesCreta = {
    "name" :"W's Creta Island",
    "type":"Pantalon",
    "price":"35000",
    "stock":"5",
    "image":"assets/img/creta.jpg"
  }

  clothesHvar = {
    "name" :"W's Hvar Logo Hat",
    "type":"Gorra",
    "price":"12500",
    "stock":"10",
    "image":"assets/img/hvar.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
