import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../../buissness-logic/api/get-products.service';
import { Products } from '../../../models/products'; 
import { log } from 'console';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] 
})
export class ProductsComponent implements OnInit {
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
    
  }
}
