import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  categories:Category[]=[];
  constructor(
    private formBuilder : FormBuilder, 
    private categoryService:CategoryService,
    private productService:ProductService,
    private toastrService:ToastrService) { }

    ngOnInit(): void {
      this.createProductAddForm();
      this.getCategories();
  }
  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      categoryId:["",Validators.required],
      productName:["", Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }       
        } 
      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
    })
  }

}
