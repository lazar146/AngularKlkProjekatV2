import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  private jsonUrl: string = "assets/JSON/info.json";
  
  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
