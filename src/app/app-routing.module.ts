import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleComponent} from "./single/single.component";
const routes: Routes = [
   {
  path:"",
  loadChildren:()=>import('./welcome/welcome.module').then(m=>m.WelcomeModule)
 },
 {
  path:"home",
  loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
 },
 {
  path:"contact",
  loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)
 },
  {
    path: 'productsSingle/:id', component: SingleComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
