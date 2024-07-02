import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisModels, IspisPrices } from '../../../models/ispis-interjefs';

@Component({
  selector: 'app-price-admin',
  templateUrl: './price-admin.component.html',
  styleUrls: ['./price-admin.component.css']
})
export class PriceAdminComponent implements OnInit {
  tableData: any;
  priceId!: number;
  priceData: IspisPrices | undefined;
  modelData: any;
  modelDataArray: IspisModels[] = [];
  showInsertForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.priceId = +params['id'];
      this.loadTableDataUpdate();
    });
  }

  price = {
    model_id: '',
    price: '',
    old_price: '',
    updated_at: ''
  };

  loadTableDataUpdate(): void {
    this.getOneTableService.getTable('models').subscribe(data => {
      this.modelData = data.data as IspisModels[];
    });

    this.getOneTableService.getTable('price').subscribe(data => {
      this.tableData = data.data as IspisPrices[];
      this.findPriceById();
    });
  }

  findPriceById(): void {
    this.priceData = this.tableData.find((price: IspisPrices) => price.id === this.priceId);
    if (this.priceData) {
      console.log('Found price:', this.priceData);
    } else {
      console.error('Price not found with ID:', this.priceId);
    }
  }

  toggleForm(): void {
    this.showInsertForm = !this.showInsertForm;
  }

  onSubmit(): void {
    if (this.priceData) {
      this.price.updated_at = new Date().toISOString();
      this.onUpdate(this.priceId, this.price);
    }
  }

  onInsert(): void {
    this.price.updated_at = new Date().toISOString();
   
    this.getOneTableService.insertTable(this.price, 'price').subscribe({
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
    this.getOneTableService.updateTable(id, updatedData, 'price').subscribe({
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
