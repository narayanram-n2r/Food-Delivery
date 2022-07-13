import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Foods 

  constructor() { }

  ngOnInit(): void {
  }

}
