import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisColors } from '../../../models/ispis-interjefs';

@Component({
  selector: 'app-colors-admin',
  templateUrl: './colors-admin.component.html',
  styleUrls: ['./colors-admin.component.css']
})
export class ColorsAdminComponent implements OnInit {

  tableData: any;
  colorId!: number;
  colorData: IspisColors | undefined;
  showInsertForm: boolean = false;

  color = {
    value: '',
    updated_at: ''
  };

  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.colorId = +params['id'];
      console.log(this.colorId);
      
      this.loadTableDataUpdate();
    });
  }

  loadTableDataUpdate(): void {
    this.getOneTableService.getTable('colors').subscribe(data => {
      this.tableData = data.data as IspisColors[];
      this.findColorById();
    });
  }

  findColorById(): void {
    this.colorData = this.tableData.find((color: IspisColors) => color.id === this.colorId);
    if (this.colorData) {
      console.log('Found color:', this.colorData);
    } else {
      console.error('Color not found with ID:', this.colorId);
    }
  }

  onSubmit() {
    this.color.updated_at = new Date().toISOString();
    this.onUpdate(this.colorId, this.color);
  }

  onUpdate(id: number, updatedData: any): void {
    this.getOneTableService.updateTable(id, updatedData, 'colors').subscribe({
      next: (response) => {
        console.log('Ažuriranje uspešno:', response);
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Greška pri ažuriranju:', error);
      }
    });
  }

  onInsert() {
    const newColor = {
      value: this.color.value,
      created_at: new Date().toISOString()
    };

    this.getOneTableService.insertTable(newColor, 'colors').subscribe({
      next: (response) => {
        console.log('Unos nove boje uspešan:', response);
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Greška pri unosu nove boje:', error);
      }
    });
  }

  toggleForm() {
    this.showInsertForm = !this.showInsertForm;
  }
}
