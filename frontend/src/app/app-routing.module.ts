import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CartPageComponent } from './cart-page/cart-page.component';
=======
<<<<<<< HEAD
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
<<<<<<< HEAD
  {path:'',component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'cart-page',component:CartPageComponent}
=======
  {path: '', component: HomeComponent},
  {path: 'search/:searchItem',component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent}
  {path:'food/id',component:FoodpageComponent},
=======
<<<<<<< HEAD
import { FoodpageComponent } from './foodpage/foodpage.component';

const routes: Routes = [
  {path:'food/:id', component:FoodpageComponent}
=======
<<<<<<< HEAD
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path:'cart-page', component:CartPageComponent}
=======
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent}
>>>>>>> ed9dd3144906dce20246fbf2697f8f3888fcabd3
>>>>>>> cbd520709d1baafe065f1444ff75f4146ca99b25
>>>>>>> 09fbc5a97eb9a6c91109df7a6b16cedde1e3eee9
>>>>>>> 69ddf2f63048a90cee5182dc255a816b8266b091
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
