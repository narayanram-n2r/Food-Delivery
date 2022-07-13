<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';
=======
<<<<<<< HEAD
import { IfStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> 09fbc5a97eb9a6c91109df7a6b16cedde1e3eee9
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPagetags?:string[];

<<<<<<< HEAD
  @Input()
  justifyContent:string='center';

  tags?:Tag[]=[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags=this.fs.getAllTag();
=======
  //Code Added for FoodPage (Start)
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[] =[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
<<<<<<< HEAD
    if(!this.foodPageTags)
=======
    if(!this.foodPagetags)
>>>>>>> 09fbc5a97eb9a6c91109df7a6b16cedde1e3eee9
    this.tags = this.fs.getAllTag();
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
  }

}
