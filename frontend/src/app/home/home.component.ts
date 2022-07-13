import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
=======
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
 
 
=======
import { ServicesComponent } from '../services/services.component';
>>>>>>> 09fbc5a97eb9a6c91109df7a6b16cedde1e3eee9
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  foods:Foods[]=[];
  constructor(private fs:FoodService, private route:ActivatedRoute) { }
=======
<<<<<<< HEAD
  foods:string[] = [];
  constructor(private fs:FoodService, private route: ActivatedRoute) { }
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
<<<<<<< HEAD
      this.foods = this.fs.getAll().filter(food =>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.foods =this.fs.getAllFoodByTag(params['tag'])
      else
      this.foods = this.fs.getAll();
    })

=======
      this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));

      else if(params['tag'])
      this.foods = this.fs.getAllFoodByTag(params['tag'])

      else
      this.foods = this.fs.getAll(); //done

    })
      
=======
foods:string[]= [];
  constructor(private fs:ServicesComponent) { }

  ngOnInit(): void { 
    this.foods = this.fs.getAll(); //done
>>>>>>> 09fbc5a97eb9a6c91109df7a6b16cedde1e3eee9
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
  }

}
