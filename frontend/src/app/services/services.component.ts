import { Injectable } from '@angular/core';

@Injectable({
  provideIn: 'root'
})
export class ServicesComponent {

  constructor() { }
  

getAll():string[]{
  return [
    '/assets/food-1.jpg',
    '/assets/food-2.jpg',
    '/assets/food-3.jpg',
    '/assets/food-4.jpg',
    '/assets/food-5.jpg',
    '/assets/food-6.jpg',
    '/assets/food-7.jpg',
    '/assets/food-8.jpg',

  ]
 }
}