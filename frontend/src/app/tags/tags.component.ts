import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPagetags?:string[];

  constructor() { }

  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags = this.fs.getAllTag();
  }

}
