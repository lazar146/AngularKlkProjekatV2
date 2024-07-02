import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisBrands, IspisColors, IspisModels, IspisRamSpecs } from '../../../models/ispis-interjefs';

@Component({
  selector: 'app-models-admin',
  templateUrl: './models-admin.component.html',
  styleUrls: ['./models-admin.component.css']
})
export class ModelsAdminComponent implements OnInit {
  tableData: any;
  modelId!: number;
  modelData: IspisModels | undefined;

  brandData: any;
  brandDataArray: IspisBrands[] = [];

  ramData: any;
  ramDataArray: IspisRamSpecs[] = [];

  colorData: any;
  colorDataArray: IspisColors[] = [];

  showInsertForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.modelId = +params['id'];
      this.loadTableDataUpdate();
    });
  }

  model = {
    name: '',
    description: '',
    brand_id: '',
    ram_id: '',
    color_id: '',
    updated_at: ''
  };

  loadTableDataUpdate(): void {
    this.getOneTableService.getTable('brands').subscribe(data => {
      this.brandData = data.data as IspisBrands[];
    });

    this.getOneTableService.getTable('ram_specs').subscribe(data => {
      this.ramData = data.data as IspisRamSpecs[];
    });

    this.getOneTableService.getTable('colors').subscribe(data => {
      this.colorData = data.data as IspisColors[];
    });

    this.getOneTableService.getTable('models').subscribe(data => {
      this.tableData = data.data as IspisModels[];
      this.findModelById();
    });
  }

  findModelById(): void {
    this.modelData = this.tableData.find((model: IspisModels) => model.id === this.modelId);
    if (this.modelData) {
      console.log('Found model:', this.modelData);
    } else {
      console.error('Model not found with ID:', this.modelId);
    }
  }

  toggleForm(): void {
    this.showInsertForm = !this.showInsertForm;
  }

  onSubmit(): void {
    if (this.modelData) {
      this.model.updated_at = new Date().toISOString();
      this.onUpdate(this.modelId, this.model);
    }
  }

  onInsert(): void {
    this.model.updated_at = new Date().toISOString();
    
    this.getOneTableService.insertTable(this.model, 'products').subscribe({
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
    this.getOneTableService.updateTable(id, updatedData, 'products').subscribe({
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
