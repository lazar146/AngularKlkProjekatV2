import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisBrands } from '../../../models/ispis-interjefs';

@Component({
  selector: 'app-brands-admin',
  templateUrl: './brands-admin.component.html',
  styleUrl: './brands-admin.component.css'
})
export class BrandsAdminComponent implements OnInit  {
  
 

  tableData: any;
  brandId!: number;
  brandData: IspisBrands | undefined;



  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService
  ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.brandId = +params['id'];
      console.log(this.brandId);
      
      this.loadTableDataUpdate();
    });
  }

   brand = {
    
    name: '',
    updated_at: ''
  };


  loadTableDataUpdate(): void {

    this.getOneTableService.getTable('brands').subscribe(data => {
      this.tableData = data.data as IspisBrands[];
      this.findBrandById();
    });
  }

  findBrandById(): void {
    this.brandData = this.tableData.find((brand: IspisBrands) => brand.id === this.brandId);
    if (this.brandData) {
      console.log('Found brand:', this.brandData);
    } else {
      console.error('Brand not found with ID:', this.brandId);
    }
  }


  onSubmit() {
    
    this.brand.updated_at = new Date().toISOString();

   
    this.onUpdate(this.brandId, this.brand);
  }


  onUpdate(id: number, updatedData: any): void {
    this.getOneTableService.updateTable(id, updatedData, 'brands').subscribe({
        next: (response) => {
          console.log(updatedData);
          
            console.log('Ažuriranje uspešno:', response);
            
        },
        error: (error) => {
            console.error('Greška pri ažuriranju:', error);
        },
        complete: () => {
            console.log('Završeno');
        }
    });
}
}
