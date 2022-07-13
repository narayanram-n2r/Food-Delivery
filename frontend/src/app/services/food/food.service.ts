import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id==id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag =="All"?
    this.getAll():this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return[
      {name:'All',count:18},
      {name:'desert',count:1},
      {name:'sweet',count:1},
      {name:'snack',count:6},
      {name:'pizza',count:1},
      {name:'hot',count:2},
      {name:'burger',count:1},
      {name:'spicy',count:2},
      {name:'taco',count:1},
      {name:'noodles',count:1},
      {name:'soup',count:1},
      {name:'bread',count:1},
      {name:'veg',count:1},
      {name:'sandwich',count:1},
      {name:'lunch',count:1},
      {name:'rice',count:1},
      {name:'biryani',count:1},
      {name:'fries',count:1},
    ];
  }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name:'Chicken Farm Pizza',
        cookTime:'10-20',
        price:439,
        favourite:true,
        origins:['Mexican'],
        star:4.5,
        imageUrl:'/assets/food1.jpg',
        tags:['Pizza','snack','hot'],

      },
      {
        id: 2,
        name:'Cheese Chicken Hamburger',
        cookTime:'15-30',
        price:199,
        favourite:true,
        origins:['Italian','Middle East','Indian'],
        star:4.0,
        imageUrl:'/assets/food2.jpg',
        tags:['burger','snack','spicy'],

      },
      {
        id: 3,
        name:'Chicken Tacos',
        cookTime:'10-15',
        price:250,
        favourite:true,
        origins:['Mexican','Indian'],
        star:4.8,
        imageUrl:'/assets/food3.jpg',
        tags:['taco','snack'],

      },
      {
        id: 4,
        name:'Chicken Schezwan Noodles',
        cookTime:'10-15',
        price:150,
        favourite:false,
        origins:['Chinese','Indian','Italy'],
        star:4.0,
        imageUrl:'/assets/food4.jpg',
        tags:['noodles','soup','hot'],

      },
      {
        id: 5,
        name:'Veg Grilled Sandwich',
        cookTime:'10-15',
        price:100,
        favourite:false,
        origins:['Continental','Middle East'],
        star:4.0,
        imageUrl:'/assets/food5.jpg',
        tags:['bread','snack','veg','sandwich'],

      },
      {
        id: 6,
        name:'Chicken Dum Biryani',
        cookTime:'10-30',
        price:349,
        favourite:true,
        origins:['Hyderabadi','Indian','Asian'],
        star:4.9,
        imageUrl:'/assets/food6.jpg',
        tags:['lunch','rice','spicy','biryani'],

      },
      {
        id: 7,
        name:'French Fries',
        cookTime:'10-15',
        price:150,
        favourite:true,
        origins:['Continental','Mexican'],
        star:4.1,
        imageUrl:'/assets/food7.jpg',
        tags:['fries','snack'],

      },
      {
        id: 8,
        name:'Choco-Current Icecream',
        cookTime:'10-15',
        price:149,
        favourite:true,
        origins:['Asian','Mexican'],
        star:4.5,
        imageUrl:'/assets/food8.jpg',
        tags:['icecream','sweet','desert','snack'],

      }
    ];
  }
}

