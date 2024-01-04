import { CommonModule, NgFor, NgIf, } from '@angular/common';
import { Component , OnInit, Pipe } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';

import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule ,HttpClientModule, NgFor, VatAddedPipe,  FormsModule,NgIf, FilterPipePipe,ToastrModule,],
  templateUrl: './product.component.html', 
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products:Product []=[]
  dataLoaded = false ;
  filterText = ''; 

  constructor( private productServvice:ProductService ,private activatedRoute:ActivatedRoute ,private toasterService:ToastrService
    ,private cartService:CartService ) { }

  ngOnInit():void{
   this.activatedRoute.params.subscribe(params=>{
    if(params["categoryId"]){
      this.getProductsByCategory(params["categoryId"])
    }else{
      this.getProducts();
    }
   })
         
  }

  getProducts(){
    this.productServvice.getProducts().subscribe(response =>{
      this.products= response.data
      this.dataLoaded = true
    })
  }

  getProductsByCategory(categoryId:number){
    this.productServvice.getProductsByCategory(categoryId).subscribe(response =>{
      this.products= response.data
      this.dataLoaded = true
    })
  }

  addToCart(product:Product){
    if(product.productId===5){
      this.toasterService.error("ürün eklenemedi")
    }
    else{
      this.toasterService.success("sepete Eklendi",product.productName)
      this.cartService.addToCard(product);
    }
  
  
  }
  
}


