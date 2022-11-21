import { ClothesClothesComponent } from './clothes-clothes/clothes-clothes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothesAboutComponent } from './clothes-about/clothes-about.component';

const routes: Routes = [
  {path: '',redirectTo: 'clothes',pathMatch:'full'},
  {path:'clothes',component: ClothesClothesComponent},
  {path:'about',component: ClothesAboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
