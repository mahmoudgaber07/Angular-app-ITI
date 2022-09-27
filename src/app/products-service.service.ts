import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  constructor(private http: HttpClient) { }
  getProdList() {
    return this.http.get('https://dummyjson.com/products')
  }
}
