import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Products } from '../../../models/products'; 

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  private jsonUrl: string = "assets/JSON/products.json";
  
  constructor(private http: HttpClient) { }

  getProd(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
  getProd2(): Observable<Products[]> {
    return this.http.get<{ product: Products[] }>(this.jsonUrl).pipe( // Prilagođeno da se očekuje objekat sa svojstvom 'product' koji sadrži niz proizvoda
      map(response => response.product) // Izvlačimo niz proizvoda iz objekta
    );
  }
  filterProducts(selectedBrands: number[], selectedRams: number[]): Observable<Products[]> {
    return this.getProd().pipe(
      map(response => response.product),
      map((products: Products[]) => products.filter((product: Products) => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand_id);
        const matchesRam = selectedRams.length === 0 || selectedRams.includes(product.ram_id);
        return matchesBrand && matchesRam;
      }))
    );
  }

}
