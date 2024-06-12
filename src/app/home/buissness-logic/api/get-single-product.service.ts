import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../../models/products'; 
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  private jsonUrl: string = "../assets/JSON/products.json";

  constructor(private http: HttpClient) { }

  getProd(): Observable<Products[]> {
    return this.http.get<{ product: Products[] }>(this.jsonUrl).pipe(
      tap(data => console.log('Data from getProd():', data)),
      map(response => response.product) 
    );
  }

  getProductById(productId: number): Observable<Products | undefined> {
    return this.getProd().pipe(
      map((products: Products[]) => {
        return products.find(product => product.id === productId);
      })
    );
  }
}
