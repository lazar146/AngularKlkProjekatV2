import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetFiltersService {

  private jsonUrl1: string = "assets/JSON/ram.json";
  private jsonUrl2: string = "assets/JSON/brands.json";


  constructor(private http: HttpClient) { }

  getRam(): Observable<any> {
    return this.http.get<any>(this.jsonUrl1);
  }
  getBrands(): Observable<any> {
    return this.http.get<any>(this.jsonUrl2);
  }
}
