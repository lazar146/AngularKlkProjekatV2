import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisBrands } from '../../../models/ispis-interjefs';

@Component({
  selector: 'app-brands-admin',
  templateUrl: './brands-admin.component.html',
  styleUrls: ['./brands-admin.component.css']
})
export class BrandsAdminComponent implements OnInit {

  tableData: any;
  brandId!: number;
  brandData: IspisBrands | undefined;
  showInsertForm: boolean = false;
  showOrInsertButton: boolean = true; // Dodata promenljiva za prikaz dugmeta

  brand = {
    name: '',
    updated_at: ''
  };

  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.brandId = +params['id'];
      this.loadTableDataUpdate();
    });
  }

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
          console.log('Ažuriranje uspešno:', response);
        },
        error: (error) => {
            console.error('Greška pri ažuriranju:', error);
        },
        complete: () => {
          this.router.navigate(['/admin']);
          console.log('Završeno');
        }
    });
  }

  toggleForm() {
    this.showInsertForm = !this.showInsertForm;
    this.showOrInsertButton = false; // Sakrij dugme "OR INSERT" nakon klika
    if (!this.showInsertForm) {
      this.resetForm();
    }
  }

  resetForm() {
    this.brand.name = '';
  }

  onInsert() {
    const newBrand = {
      name: this.brand.name,
      created_at: new Date().toISOString(),
    };
  
    this.getOneTableService.insertTable(newBrand, 'brands').subscribe({
      next: (response) => {
        console.log('Unos novog brenda uspešan:', response);
      
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Greška pri unosu novog brenda:', error);
      }
    });
  }
  
}
