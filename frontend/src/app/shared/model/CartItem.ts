export class CartItem{
    constructor(food:Foods){
        this.food=food;
    }

    food:Foods;
    quantity:number=1;          //starting count of items
    get price(): number{
        return this.food.price * this.quantity;
    }
}