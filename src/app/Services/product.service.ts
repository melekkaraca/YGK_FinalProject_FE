import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //api çağrısı yapmak için kullanılır. //react ta bu şekilde kullanılabilir axios,fetch
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44342/api/";
  constructor(private httpClient:HttpClient) { }
  getProducts() : Observable<ListResponseModel<Product>> {
    let newpath = this.apiUrl + "products/getAll"
    return this.httpClient.get<ListResponseModel<Product>>(newpath); //dönüş tipim observable
  }
  getProductsByCategoryId(categoryId:number) : Observable<ListResponseModel<Product>> {
    let newpath = this.apiUrl + "products/GetAllByCategoryId?id="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newpath); //dönüş tipim observable
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/add",product);
  }

  delete(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/delete",product);
  }
}
