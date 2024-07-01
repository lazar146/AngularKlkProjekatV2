import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisRamSpecs } from '../../../models/ispis-interjefs';



@Component({
  selector: 'app-ram-specs-admin',
  templateUrl: './ram-specs-admin.component.html',
  styleUrl: './ram-specs-admin.component.css'
})
export class RamSpecsAdminComponent implements OnInit {

  tableData: any;
  ramId!: number;
  ramData: IspisRamSpecs | undefined;

  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.ramId = +params['id'];
      console.log(this.ramId);
      
      this.loadTableDataUpdate();
    });
  }

   ram = {
    name: '',
    updated_at: ''
  };


  loadTableDataUpdate(): void {

    this.getOneTableService.getTable('ram_specs').subscribe(data => {
      this.tableData = data.data as IspisRamSpecs[];
      this.findBrandById();
    });
  }

  findBrandById(): void {
    this.ramData = this.tableData.find((ram: IspisRamSpecs) => ram.id === this.ramId);
    if (this.ramData) {
      console.log('Found brand:', this.ramData);
    } else {
      console.error('Brand not found with ID:', this.ramId);
    }
  }


  onSubmit() {
    
    this.ram.updated_at = new Date().toISOString();

   
    this.onUpdate(this.ramId, this.ram);
  }


  onUpdate(id: number, updatedData: any): void {
    this.getOneTableService.updateTable(id, updatedData, 'rams').subscribe({
        next: (response) => {
          console.log(updatedData);
          
            console.log('Ažuriranje uspešno:', response);
            
        },
        error: (error) => {
          console.log(updatedData);
            console.error('Greška pri ažuriranju:', error);
        },
        complete: () => {
            console.log('Završeno');
        }
    });
}

}
