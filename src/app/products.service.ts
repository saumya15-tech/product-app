import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
getProductList = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get(this.getProductList);
  }
}
