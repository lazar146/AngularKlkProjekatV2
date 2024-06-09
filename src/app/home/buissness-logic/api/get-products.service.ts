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


}
