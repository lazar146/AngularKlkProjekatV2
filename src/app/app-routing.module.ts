import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleComponent} from "./single/single.component";
import { IspisTabelaComponent } from './admin-panel/components/ispis-tabela/ispis-tabela.component';
import { IspisTabeleIzabraneComponent } from './admin-panel/components/ispis-tabele-izabrane/ispis-tabele-izabrane.component';
import { BrandsAdminComponent } from './admin-panel/components/brands-admin/brands-admin.component';
import { UpdateComponentDvaComponent } from './admin-panel/components/update-component-dva/update-component-dva.component';
import { ColorsAdminComponent } from './admin-panel/components/colors-admin/colors-admin.component';
import { RamSpecsAdminComponent } from './admin-panel/components/ram-specs-admin/ram-specs-admin.component';
import { ImagesAdminComponent } from './admin-panel/components/images-admin/images-admin.component';
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
  path:"admin",
  loadChildren:()=>import('./admin-panel/admin-panel.module').then(m=>m.AdminPanelModule)
 },
  {
    path: 'productsSingle/:id', component: SingleComponent 
  },
  {
    path: 'showTable/:name', component: IspisTabeleIzabraneComponent 
  },
  {
    path: 'update', component: UpdateComponentDvaComponent
  },
  { 
    path: 'brands', component: BrandsAdminComponent 
  },
  { 
    path: 'colors', component: ColorsAdminComponent
  },
  { 
    path: 'ram_specs', component: RamSpecsAdminComponent
  },
  { 
    path: 'images', component: ImagesAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
