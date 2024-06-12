import { Component, OnInit } from '@angular/core';
import { Products } from '../../../models/products';
import { GetProductsService } from '../../buissness-logic/api/get-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  latestProducts: Products[] = [];

  constructor(private getProductsService: GetProductsService) {}

  ngOnInit(): void {
    this.getProductsService.getProd().subscribe(products => {
      this.products = products.product;
      this.getLatestProducts();
    });
  }

  getOutputProducts(filteredProducts: Products[]): void {
    this.products = filteredProducts;
    this.getLatestProducts();
  }

  getLatestProducts(): void {
    this.latestProducts = this.products.slice(-3).reverse();
  }
}
