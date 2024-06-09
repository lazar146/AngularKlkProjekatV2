import { Component, OnInit } from '@angular/core';
import { Products } from '../../../../../models/products';
import { GetProductsService } from '../../../../../home/buissness-logic/api/get-products.service';

@Component({
  selector: 'app-lastest-prod',
  templateUrl: './lastest-prod.component.html',
  styleUrl: './lastest-prod.component.css'
})
export class LastestProdComponent implements OnInit {
  products: Products[] = []; 
  latestProducts: Products[] = [];

  constructor(private getProductsService: GetProductsService) { } 

  ngOnInit(): void {
    this.getProductsService.getProd().subscribe(products => {
      //console.log(products);
      
      this.products = products.product;
      this.getLatestProducts();
    });
  }

  getLatestProducts(): void {
    this.latestProducts = this.products.slice(-3).reverse();
  }

  addToCart(productId: number): void {
    console.log(`Product with ID ${productId} added to cart`);
     {

}
  }}