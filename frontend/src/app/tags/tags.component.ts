import { IfStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  //Code Added for FoodPage (Start)
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[] =[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.fs.getAllTag();
  }

}
