import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisImages, IspisModels } from '../../../models/ispis-interjefs';

@Component({
  selector: 'app-images-admin',
  templateUrl: './images-admin.component.html',
  styleUrls: ['./images-admin.component.css']
})
export class ImagesAdminComponent implements OnInit {

  tableData: any;
  imageId!: number;
  imageData: IspisImages | undefined;
  modelData: IspisModels[] = [];
  showInsertForm: boolean = false;

  image = {
    image_name: '',
    model_id: '',
    updated_at: ''
  };

  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.imageId = +params['id'];
      console.log(this.imageId);
      this.loadTableDataUpdate();
    });
  }

  loadTableDataUpdate(): void {
    this.getOneTableService.getTable('models').subscribe(data => {
      this.modelData = data.data as IspisModels[];
    });

    this.getOneTableService.getTable('images').subscribe(data => {
      this.tableData = data.data as IspisImages[];
      this.findImageById();
    });
  }

  findImageById(): void {
    this.imageData = this.tableData.find((image: IspisImages) => image.id === this.imageId);
    if (this.imageData) {
      console.log('Found image:', this.imageData);
    } else {
      console.error('Image not found with ID:', this.imageId);
    }
  }

  toggleForm(): void {
    this.showInsertForm = !this.showInsertForm;
  }

  onSubmit() {
    this.image.updated_at = new Date().toISOString();
    this.onUpdate(this.imageId, this.image);
  }

  onUpdate(id: number, updatedData: any): void {
    this.getOneTableService.updateTable(id, updatedData, 'images').subscribe({
      next: (response) => {
        console.log('Ažuriranje uspešno:', response);
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Greška pri ažuriranju:', error);
      },
      complete: () => {
        console.log('Završeno');
      }
    });
  }

  onInsert() {
    this.image.updated_at = new Date().toISOString();
    this.getOneTableService.insertTable(this.image, 'images').subscribe({
      next: (response) => {
        console.log('Unos uspešan:', response);
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Greška pri unosu:', error);
      },
      complete: () => {
        console.log('Završeno');
      }
    });
  }
}
