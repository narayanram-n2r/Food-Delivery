import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:string[]= [];
  constructor(private fs:ServicesComponent) { }

  ngOnInit(): void { 
    this.foods = this.fs.getAll(); //done
  }

}
