import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetOneTableService {
  private apiUrl: string = "http://127.0.0.1:8000/api/showTable";
  private apiOstalo :  string = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getTable(name: string): Observable<any> {
    const url = `${this.apiUrl}/${name}`;
    return this.http.get<any>(url);
  }
  updateTable(id: number, data: any, tableName: string): Observable<any> {
    console.log(data);
    console.log(`${this.apiOstalo}/${tableName}/${id}`, data);
    
    return this.http.put(`${this.apiOstalo}/${tableName}/${id}`, data);
}
}
