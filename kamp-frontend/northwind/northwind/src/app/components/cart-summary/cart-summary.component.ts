import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [NgFor,CommonModule,ToastrModule,],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {
  
  cartItems:CartItem[]=[];
  constructor(private cartService:CartService, private tosterService:ToastrService ) { }
  ngOnInit():void{
  this.getCard();
 }
  
 getCard(){
  this.cartItems=this.cartService.list();
 }
 removeFromCart(product:Product){
  this.cartService.removeFromCart(product);
  this.tosterService.error("silindi",product.productName+"sepeeten silindi");
 }
}
