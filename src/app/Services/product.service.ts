import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'; //api çağrısı yapmak için kullanılır. //react ta bu şekilde kullanılabilir axios,fetch
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44342/api/Products/getall";
  constructor(private httpClient:HttpClient) { }
  getProducts() : Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl); //dönüş tipim observable
  }
}
