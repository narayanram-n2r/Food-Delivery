import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent, StarRatingModule } from 'angular-star-rating';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
<<<<<<< HEAD
import { FoodpageComponent } from './foodpage/foodpage.component';

// import { StarRatingComponent } from 'ng-starrating';
// import { RatingModule } from 'ng-starrating';
=======
import { NotFoundComponent } from './not-found/not-found.component';
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
<<<<<<< HEAD
    CartPageComponent,
    FoodpageComponent
=======
    FoodpageComponent,
    CartPageComponent,
    NotFoundComponent
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StarRatingModule
    // StarRatingComponent,
    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
