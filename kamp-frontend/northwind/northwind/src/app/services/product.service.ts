import { Injectable  } from '@angular/core';
import { Observable  } from 'rxjs'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { ActivatedRoute } from '@angular/router';
import { ResponseModel } from '../models/responseModel';



 


@Injectable({
  providedIn: 'root',
  
})

export class ProductService {

  apiUrl ='http://localhost:5164/api/';
  constructor(private httpClient :HttpClient ) {}
  
    getProducts():Observable<ListResponseModel<Product>> { 
    let newPath=this.apiUrl+"products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
    } 
    
    getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> { 
      let newPath =this.apiUrl+"products/getbycategory?categoryId="+categoryId;
      return this.httpClient.get<ListResponseModel<Product>>(newPath); 
    } 

    add(product:Product):Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
    }
  }
  

 


