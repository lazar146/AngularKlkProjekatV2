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

  insertTable(data: any, tableName: string): Observable<any> {
    console.log(data);
    console.log(`${this.apiOstalo}/${tableName}`, data);
    return this.http.post(`${this.apiOstalo}/${tableName}`, data);
  }

  deleteTable(id: number, tableName: string): Observable<any> {
    if(tableName == 'models'){
      console.log(`Deleting from products with id ${id}`);
      const url = `${this.apiOstalo}/products/${id}`;
      return this.http.delete(url);
    }
    else if(tableName == 'ram_specs'){
      console.log(`Deleting from rams with id ${id}`);
      const url = `${this.apiOstalo}/rams/${id}`;
      return this.http.delete(url);
    }
    else{
    console.log(`Deleting from ${tableName} with id ${id}`);
    const url = `${this.apiOstalo}/${tableName}/${id}`;
    return this.http.delete(url);
    }
    
  }
  
}
