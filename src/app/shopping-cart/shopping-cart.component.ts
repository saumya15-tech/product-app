import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../product';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  count = 0;
  cartProductList: any;
  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
    this.cartProductList = this.calculateProductQty(
      this.cartservice.getItems()
    );
    console.log(this.cartProductList);
  }

   calculateProductQty(cartData: any) {
    const result = Object.values(
      cartData.reduce((acc: any, e: any) => {
        let prod = `${e.name}|${e.name}`;
        if (!acc[prod]) acc[prod] = { ...e, count: 1 };
        else acc[prod].count += 1;
        return acc;
      }, {})
    );
    return result;
  }

  addProduct(product: any) {
    let objIndex = this.productIndex(product);
    this.cartProductList[objIndex].count += 1;
    this.cartservice.addProductToCart(product);
    // let objIndex = this.productIndex(product);
    // this.cartProductList[objIndex].count += 1;
    // console.log(this.cartProductList[objIndex]);
    // this.cartservice.addProductToCart(product);
  }

  productIndex(productObj: any) {
    return this.cartProductList.findIndex(
      (obj: any) => obj.id == productObj.id
    );
  }
}
