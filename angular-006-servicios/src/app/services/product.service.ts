import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient: HttpClient | undefined; // Add type annotation for httpClient property

  obtenerProducto1() {
    return this.httpClient.get<Product>('http://fakestoreapi.com/products/1');
  }

  findAll() {
    return this.httpClient.get<Product[]>('http://fakestoreapi.com/products');
  }

  findById(id: number | string) {
    return this.httpClient.get<Product>(`http://fakestoreapi.com/products/${id}`);
  }
}
