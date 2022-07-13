<<<<<<< HEAD
import { CartItem } from "./cartItem";

export class Cart{
    items:CartItem[] = [];

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
=======
import { CartItem } from "./CartItem";

export class Cart{
    items: CartItem[] = [];

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item =>{

            totalPrice += item.price;
            
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
        });
        return totalPrice;
    }
}