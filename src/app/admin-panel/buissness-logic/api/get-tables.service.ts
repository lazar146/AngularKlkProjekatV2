import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTablesService {
  private apiUrl: string = "http://127.0.0.1:8000/api/allTables";
  constructor(private http: HttpClient) { }

  getTables(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
