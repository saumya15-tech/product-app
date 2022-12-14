import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { PRODUCT } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  searchText: any = null;
  @Input() product: any;
  productList: any;
  data: any;
  colors: any;
  uniqueColor:any;
  
  constructor(private productsService: ProductsService, private cartservice:CartService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productsService.getProducts().subscribe((data) => {
      this.productList = data;
      this.sortColor();
      // this.sortType();
    });
  }

  //Sorting Functionality
  sortColor() {
    const unique = [
      ...new Set(
        this.productList.map((item: { color: any}) => item.color)
      ),
    ];
    this.uniqueColor = unique;
  }
  
  //Sorting Functionality

  // sortType() {
  //   const type = [
  //     ...new Set(
  //       this.productList.map((item: { type: any}) => item.type)
  //     ),
  //   ];
  //   console.log(type);
  // }

  addToCart(product:PRODUCT){
    this.cartservice.addProductToCart(product);
    console.log(product.color);
  }  
}
