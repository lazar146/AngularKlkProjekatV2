import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetProductsService } from './buissness-logic/api/get-products.service';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule

  ],
  providers: [
    GetProductsService 
  ]
})
export class HomeModule { }
