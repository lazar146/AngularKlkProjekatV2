import { Component, OnInit } from '@angular/core';
import { GetFiltersService } from '../../buissness-logic/api/get-filters.service';
import { Filters } from '../../../models/filters'; 
import { log } from 'console';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  brands: Filters[] = []; 
  models: Filters[] = []; 

  constructor(private getFiltersService: GetFiltersService) { } 

  ngOnInit(): void {
    this.getFiltersService.getModels().subscribe(models => {
      
      this.models = models.models;
      
    });
    this.getFiltersService.getBrands().subscribe(brands => {
     
      
      this.brands = brands.brands;
      
    });
  }

  
}