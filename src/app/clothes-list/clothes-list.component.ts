import { Component, OnInit } from '@angular/core';
import { ClothesCartService } from '../clothes-cart.service';
import { Clothe } from './clothe';
import { ClotheDataService } from '../clothe-data.service';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  clothes: Clothe[] = [] ;

  constructor(
    private shoppingCart: ClothesCartService,
    private clothesDataService: ClotheDataService) {
  }

  ngOnInit(): void {
    this.clothesDataService.getAll()
    .subscribe(clothes => this.clothes = clothes);
  }

  addToCart(clothe: Clothe): void{
    this.shoppingCart.addToCart (clothe);
    clothe.stock -= clothe.quantity;
    clothe.quantity = 0;
  }
  maxReached(m:string){
    alert(m);
  }
  getSaleImage(): string {
    return 'assets/img/sale.png';  
  }
}
