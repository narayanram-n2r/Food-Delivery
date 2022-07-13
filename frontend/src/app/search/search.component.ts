import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute,Router } from '@angular/router';
=======
import { ActivatedRoute, Router } from '@angular/router';

>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
<<<<<<< HEAD
  searchItem:string = '';
=======
  searchItem:string ='';

>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
<<<<<<< HEAD
      this.searchItem = params['searchItem'];
      })
  }
  search() :void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/'+this.searchItem)
=======
      this.searchItem=params['searchItem'];
    })
  }
  search(): void{
    if(this.searchItem)
    this.router .navigateByUrl('/search/' + this.searchItem)
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091

  }

}
