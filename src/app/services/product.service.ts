import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/pproducts')
  }
  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/pproducts/${id}`)
  }
  deleteProducts(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/pproducts/${id}`)
  }
  addProducts(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:3000/pproducts`, product)
  }
  updateProducts(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`http://localhost:3000/pproducts/${product.id}`, product)
  }
}
