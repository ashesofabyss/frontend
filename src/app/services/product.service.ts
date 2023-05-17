import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myApiUrl = `${environment.endpoint}api/products/`;
  }

  getListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.myApiUrl);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myApiUrl}${id}`)
  }

  saveProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.myApiUrl}`, product)
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.myApiUrl}${id}`)
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.myApiUrl}${id}`, product);
  }

}
