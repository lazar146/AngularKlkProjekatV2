import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisRamSpecs } from '../../../models/ispis-interjefs';

@Component({
  selector: 'app-ram-specs-admin',
  templateUrl: './ram-specs-admin.component.html',
  styleUrls: ['./ram-specs-admin.component.css']
})
export class RamSpecsAdminComponent implements OnInit {

  tableData: any;
  ramId!: number;
  ramData: IspisRamSpecs | undefined;
  showInsertForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.ramId = +params['id'];
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
      this.findRamById();
    });
  }

  findRamById(): void {
    this.ramData = this.tableData.find((ram: IspisRamSpecs) => ram.id === this.ramId);
    if (this.ramData) {
      console.log('Found RAM spec:', this.ramData);
    } else {
      console.error('RAM spec not found with ID:', this.ramId);
    }
  }

  toggleForm(): void {
    this.showInsertForm = !this.showInsertForm;
  }

  onSubmit(): void {
    if (this.ramData) {
      this.ram.updated_at = new Date().toISOString();
      this.onUpdate(this.ramId, this.ram);
    }
  }

  onInsert(): void {
    this.ram.updated_at = new Date().toISOString();

    this.getOneTableService.insertTable(this.ram, 'rams').subscribe({
      next: (response) => {
        console.log('Insert uspešan:', response);
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Greška pri unosu:', error);
      }
    });
  }

  onUpdate(id: number, updatedData: any): void {
    this.getOneTableService.updateTable(id, updatedData, 'rams').subscribe({
      next: (response) => {
        console.log('Ažuriranje uspešno:', response);
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Greška pri ažuriranju:', error);
      }
    });
  }

}
