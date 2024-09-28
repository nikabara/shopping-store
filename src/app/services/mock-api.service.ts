import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private apiUrl: string = 'https://66f532339aa4891f2a244199.mockapi.io/api/appDB';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    console.log("1")
    return this.http.get<Item[]>(`${this.apiUrl}/items`);
  }

  getItem(id: number): Observable<Item[]> {
    console.log("2")
    return this.http.get<Item[]>(`${this.apiUrl}/items/${id}`)
  }
}
