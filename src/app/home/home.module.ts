import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { FiltersComponent } from './components/filters/filters.component';


@NgModule({
  declarations: [
    ProductsComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
