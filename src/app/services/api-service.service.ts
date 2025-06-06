import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl: string = 'http://localhost:4000/';

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<IProduct[]| any> {
    return this.http.get<IProduct[]>(`${this.baseUrl}products/all`).pipe(
      map((response: IProduct[]) => {
        return response;
      
      }),
      catchError((error) => {
        console.error('Error fetching products:', error);
        return throwError(() => error);
      }))
  }
}
