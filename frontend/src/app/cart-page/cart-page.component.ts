import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
<<<<<<< HEAD
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
=======
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
<<<<<<< HEAD
  constructor(private cartService:CartService) { 
    
    this.setCart();
  }
=======
  constructor(private cartService : CartService) {
    this.setCart();
   }
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart(); 
  }

  setCart(){
    this.cart= this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
