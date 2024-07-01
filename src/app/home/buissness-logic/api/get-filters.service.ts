import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetFiltersService {
  private apiUrl1: string = "http://127.0.0.1:8000/api/rams";
  private apiUrl2: string = "http://127.0.0.1:8000/api/brands";
  private jsonUrl1: string = "assets/JSON/ram.json";
  private jsonUrl2: string = "assets/JSON/brands.json";


  constructor(private http: HttpClient) { }

  getRam(): Observable<any> {
    return this.http.get<any>(this.apiUrl1);
  }
  getBrands(): Observable<any> {
    return this.http.get<any>(this.apiUrl2);
  }
}
