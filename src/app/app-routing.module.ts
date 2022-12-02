import { ClothesClothesComponent } from './clothes-clothes/clothes-clothes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesAboutComponent } from './clothes-about/clothes-about.component';
import { ClothesContactComponent } from './clothes-contact/clothes-contact.component';

const routes: Routes = [
  {path:'',redirectTo: 'clothes',pathMatch:'full'},
  {path:'clothes',component: ClothesClothesComponent},
  {path:'about',component: ClothesAboutComponent },
  {path:'contact',component: ClothesContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
