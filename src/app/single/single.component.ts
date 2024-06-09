import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from '../home/buissness-logic/api/get-single-product.service';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  public productId: number | undefined;
  public product$: Observable<Products | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: GetProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; 
      console.log('Product ID:', productId);
      
      this.product$ = this.productService.getProductById(productId); 
    });
  }
}
