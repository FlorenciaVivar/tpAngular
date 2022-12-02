import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClothesCartService } from '../clothes-cart.service';
import { ClotheDataService } from '../clothe-data.service';
import { Clothe } from '../clothes-list/clothe';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {

  cartList$: Observable<Clothe[]>;
  clotheArreglo : Clothe[] = [];
  totalPrice : number =23;
  result :number = 0 ;

  constructor(private shoppingCart: ClothesCartService,
    private clotheDataService : ClotheDataService){
    this.cartList$ = shoppingCart.cartList.asObservable();
    this.shoppingCart.observablePrice.subscribe(data=>{
      this.totalPrice=data;
    })

  }
  ngOnInit(): void {
  }

}
