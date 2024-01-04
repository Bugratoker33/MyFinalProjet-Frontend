import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormControl,Validator, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms"
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule ],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  
  
  productAddFrom:FormGroup;
  constructor(private fromBuilder:FormBuilder, private produtService:ProductService ,private tosterService:ToastrService) { } 

  ngOnInit(): void {
    
    this.createPrductAddFrom();
    
  }


  createPrductAddFrom(){
    this.productAddFrom = this.fromBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]

    })
  }
  
  add() {
    if (this.productAddFrom.valid) {
      let productModel = Object.assign({}, this.productAddFrom.value);
      this.produtService.add(productModel).subscribe({
       next : (response) => {
          this.tosterService.success(response.message + " " + "Ürün Başarıyla Eklendi");
        },
        error: (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) { // Errors.length kullanılmalı
              this.tosterService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası");
            }
          }
        }
    })
    } 
    else 
    {
      this.tosterService.error("Formunuz Eksik veya Hatalı", "Dikkat");
    }
  }
}
