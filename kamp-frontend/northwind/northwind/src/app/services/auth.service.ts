import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../models/tokenModel';
import { SingelResponseModel } from '../models/singleResponseModel';
import { RegisterModel } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:5164/api/auth/";

  constructor( private httcilent:HttpClient ) { }


  login(loginModel:LoginModel){
    
    return this.httcilent.post<SingelResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }  
    else{
    return false;
    }

  }  
  register(registermodel:RegisterModel){
    let newPath = this.apiUrl+'register';
    return this.httcilent.post<SingelResponseModel<TokenModel>>(newPath, registermodel);
 
  }
}

