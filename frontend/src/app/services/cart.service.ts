import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
import { Foods } from '../shared/models/food';
=======
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
<<<<<<< HEAD
  
  addToCart(food:Foods):void{
    let cartItem=this.cart.items.find(item => item.food.id ===food.id)
    if(cartItem){
      this.changeQuantity(food.id , cartItem.quantity +1)
      return ;

    }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item =>item.food.id !=foodId)
  }
  changeQuantity(quantity:number, foodId:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
=======
 addToCart (food:Food) : void{
   let cartItem = this.cart.items.find(item => item.food.id === food.id)
   if(cartItem){
    this.changeQuantity(food.id , cartItem.quantity +1);
    return;
   }
   this.cart.items.push(new CartItem(food));
 }
 removeFromCart(foodId:number): void{
  this.cart.items = this.cart.items.filter(item => item.food.id !=foodId)
 }
changeQuantity(quantity:number , foodId:number){
  let cartItem = this.cart.items.find(item => item.food.id === foodId)
  if(!cartItem) return;
  cartItem.quantity = quantity;
 }
 getCart():Cart{
  return this.cart;
 }
}

>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
