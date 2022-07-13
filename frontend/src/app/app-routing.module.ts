import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
