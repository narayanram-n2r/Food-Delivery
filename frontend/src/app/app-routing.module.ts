import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodpageComponent } from './foodpage/foodpage.component';

const routes: Routes = [
  {path:'food/:id', component:FoodpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
