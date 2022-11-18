import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {

  clothes = {
    "name" :"W's Santorini Island",
    "type":"Remera",
    "price":"15000",
    "stock":"15",
    "image":"assets/img/santorini.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
