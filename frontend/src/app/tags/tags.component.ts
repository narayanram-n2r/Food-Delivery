import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPagetags?:string[];

  @Input()
  justifyContent:string='center';

  tags?:Tag[]=[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags=this.fs.getAllTag();
  }

}
