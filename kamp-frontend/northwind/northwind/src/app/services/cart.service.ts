import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCard(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem= new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem);

    }
  }
   list():CartItem[]{
    return CartItems;
   }
 removeFromCart(product:Product){
  let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
  CartItems.splice(CartItems.indexOf(item),1);
 }

}
