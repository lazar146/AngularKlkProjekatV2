import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetOneTableService } from '../../buissness-logic/api/get-one-table.service';
@Component({
  selector: 'app-update-component-dva',
  templateUrl: './update-component-dva.component.html',
  styleUrl: './update-component-dva.component.css'
})
export class UpdateComponentDvaComponent implements OnInit{
  tableName!: string;
  dataId!: number;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private getOneTableService: GetOneTableService
    , private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tableName = params['tableName'];
      this.dataId = +params['id'];
      this.navigateBasedOnTable();
    });
  }

  
  navigateBasedOnTable(): void {
    // if (this.tableName === 'brands') {
    //   this.router.navigate(['/brands'], { queryParams: { id: this.dataId } });
    // }
    // else if (this.tableName === 'colors') {
    //   this.router.navigate(['/colors'], { queryParams: { id: this.dataId } });
    // }
    this.router.navigate([this.tableName], { queryParams: { id: this.dataId } });
  }
}
