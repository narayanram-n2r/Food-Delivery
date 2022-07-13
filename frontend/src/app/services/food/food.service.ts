import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number) {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {

    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));



  }

  getAllTag():Tag[]{
    return [
      {name: 'All', count:14},
      {name: 'FastFood', count:4},
      {name: 'Pizza', count:2},
      {name: 'Lunch', count:3},
      {name: 'SlowFood', count:2},
      {name: 'HamBurger', count:1},
      {name: 'Fry', count:1},
      {name: 'Soup', count:1},
    ]
  }

  getAll(): Foods[] {
    return [

      {
        id: 1,
        name: 'MeatBall',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ["italy"],
        star: 1.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['slowFood', 'Lunch'],
      },

      {
        id: 2,
        name: 'MeatBall',
        price: 20,
        cookTime: '20-30',
        favorite: false,
        origins: ['persia', 'middle east', 'china'],
        star: 1.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['slowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'MeatBall',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 1.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['slowFood', 'Lunch'],
      },
      {
        id: 4,
        name: 'MeatBall',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 1.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['slowFood', 'Lunch'],
      },
      {
        id: 5,
        name: 'MeatBall',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 1.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['slowFood', 'Lunch'],
      },
      {
        id: 6,
        name: 'MeatBall',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 1.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['slowFood', 'Lunch'],
      },
      {
        id: 7,
        name: 'MeatBall',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 1.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['slowFood', 'Lunch'],
      },
      {
        id: 8,
        name: 'MeatBall',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 1.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['slowFood', 'Lunch'],
      },


    ];
  }
}
