import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
import { IspisBrands, IspisColors, IspisImages, IspisModels, IspisPrices, IspisRamSpecs, IspisRoles } from '../../../models/ispis-interjefs';
@Component({
  selector: 'app-ispis-tabele-izabrane',
  templateUrl: './ispis-tabele-izabrane.component.html',
  styleUrl: './ispis-tabele-izabrane.component.css'
})
export class IspisTabeleIzabraneComponent implements OnInit {

  tableData: any;
  tableName!: string;
  tableHeaders: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tableName = params['name'];
      this.loadTableData();
    });
  }



  loadTableData(): void {

    

    this.getOneTableService.getTable(this.tableName).subscribe(data => {

      if (this.tableName === 'brands') {
        this.tableData = data.data as IspisBrands[];
      } else if (this.tableName === 'colors') {
        this.tableData = data.data as IspisColors[];
      } else if (this.tableName === 'images') {
        this.tableData = data.data as IspisImages[];
       } else if (this.tableName === 'models') {
         this.tableData = data.data as IspisModels[];
       } 
      else if (this.tableName === 'price') {
        this.tableData = data.data as IspisPrices[];
      } else if (this.tableName === 'ram_specs') {
        this.tableData = data.data as IspisRamSpecs[];
      } else if (this.tableName === 'roles') {
        this.tableData = data.data as IspisRoles[];
      } 

      
      if (this.tableData && this.tableData.length > 0) {
        this.tableHeaders = Object.keys(this.tableData[0]);
      }
      
    });
  }


  


}
