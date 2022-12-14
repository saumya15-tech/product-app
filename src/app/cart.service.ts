import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {PRODUCT} from './product'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: PRODUCT[] = [];
  count: number = 0;
  cartCountSubject = new BehaviorSubject(0);
  constructor() { }

  addProductToCart(product:any) {
    this.items.push(product);
    console.log(product);
    this.count += 1;
    this.cartCountSubject.next(this.count);
    console.log(this.count);
  }
  getItems() {
    return this.items;
  }
}
