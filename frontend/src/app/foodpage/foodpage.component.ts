import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
<<<<<<< HEAD
  food!:Foods;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private foodService:FoodService,private cartService:CartService) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food =foodService.getFoodById(params['id'])
    })
   }
=======
  food!:Foods 

  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService:FoodService) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        {
          this.food  = foodService.getFoodById(params['id']); 
        }
      })
     }
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('cart-page')
  }

}
