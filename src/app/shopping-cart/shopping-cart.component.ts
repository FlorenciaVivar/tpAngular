import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClothesCartService } from '../clothes-cart.service';
import { Clothe } from '../clothes-list/clothe';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartList$: Observable<Clothe[]>;
  constructor(private shoppingCart: ClothesCartService) {
    this.cartList$ = shoppingCart.cartList.asObservable();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
