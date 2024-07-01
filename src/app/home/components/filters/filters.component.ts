import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetFiltersService } from '../../buissness-logic/api/get-filters.service';
import { Filters } from '../../../models/filters'; 
import { GetProductsService } from '../../buissness-logic/api/get-products.service';
import { Products } from '../../../models/products';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  brands: Filters[] = []; 
  rams: Filters[] = []; 
  checkedBrands: number[] = [];
  checkedRams: number[] = [];

  @Output() filteredProductsOutput = new EventEmitter<Products[]>();

  constructor(private getFiltersService: GetFiltersService, private productService: GetProductsService) { } 

  ngOnInit(): void {
    this.getFiltersService.getRam().subscribe(ram => {
      this.rams = ram.rams;
    });
    this.getFiltersService.getBrands().subscribe(brands => {
      this.brands = brands.brands;
    });
  }

  promena(event: any, id: number, tip: number) {
    if (event.target.checked) {
      if (tip === 1) {
        this.checkedBrands.push(id);
      } else if (tip === 2) {
        this.checkedRams.push(id);
      }
    } else {
      if (tip === 1) {
        const indexBrands = this.checkedBrands.indexOf(id);
        if (indexBrands !== -1) {
          this.checkedBrands.splice(indexBrands, 1);
        }
      } else if (tip === 2) {
        const indexRams = this.checkedRams.indexOf(id);
        if (indexRams !== -1) {
          this.checkedRams.splice(indexRams, 1);
        }
      }
    }
    
    
    this.productService.filterProducts(this.checkedBrands, this.checkedRams).subscribe(filteredProducts => {
      this.filteredProductsOutput.emit(filteredProducts);
    });
  }
}
