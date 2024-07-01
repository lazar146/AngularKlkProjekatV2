import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisImages, IspisModels } from '../../../models/ispis-interjefs';
@Component({
  selector: 'app-images-admin',
  templateUrl: './images-admin.component.html',
  styleUrl: './images-admin.component.css'
})
export class ImagesAdminComponent implements OnInit{


  
  tableData: any;
  imageId!: number;
  imageData: IspisImages | undefined;
  modelData: any;
  modelDataArray: IspisModels[] = [];

  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService
  ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.imageId = +params['id'];
      console.log(this.imageId);
      
      this.loadTableDataUpdate();
    });
  }
  image = {
    
    image_name: '',
    model_id: '',
    updated_at: ''
  };

  loadTableDataUpdate(): void {
    
    
    
    this.getOneTableService.getTable('models').subscribe(data => {
      
      this.modelData = data.data as IspisModels[];
      
    });



    this.getOneTableService.getTable('images').subscribe(data => {
      this.tableData = data.data as IspisImages[];
      
      this.findBrandById();
    });

   
  }


  findBrandById(): void {
    this.imageData = this.tableData.find((image: IspisImages) => image.id === this.imageId);
    if (this.imageData) {
     // this.modelDataArray = this.modelData.find((model: IspisModels) => model.id === this.imageData?.model_id);
      //console.log(this.modelDataArray);
      
      console.log('Found image:', this.imageData);
    } else {
      console.error('Image not found with ID:', this.imageId);
    }
  }

  onSubmit() {
    
    this.image.updated_at = new Date().toISOString();
    console.log(this.image.model_id);
    
   
    this.onUpdate(this.imageId, this.image);
  }


  onUpdate(id: number, updatedData: any): void {
    this.getOneTableService.updateTable(id, updatedData, 'images').subscribe({
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
