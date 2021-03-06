import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded=false;
  filterText="";

  constructor(private productService : ProductService,
     private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"])
      {
        this.getProductsByCategoryId(params["categoryId"])
      }else
      {
        this.getProducts();
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })}
  getProductsByCategoryId(categoryId:number)
  {
    this.productService.getProductsByCategoryId(categoryId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })
  }

 addToCart(product:Product)
 {
    this.toastrService.success("Sepete eklendi ", product.productName)
    this.cartService.addToCart(product);
 }

 delete(product:Product){
   this.productService.delete(product).subscribe(response=>{
    this.toastrService.success(response.message,"Silindi"),
    this.getProducts();
  },responseError=>{
    console.log(responseError)
    this.toastrService.error(responseError.error)
  })
   //this.toastrService.success("Ürün silindi", product.productName)
 }

}
