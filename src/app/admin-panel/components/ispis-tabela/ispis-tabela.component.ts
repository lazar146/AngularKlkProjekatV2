import { Component, OnInit } from '@angular/core';
import { GetTablesService } from '../../buissness-logic/api/get-tables.service';
import { IspisTabele } from '../../../models/ispis-tabele';

@Component({
  selector: 'app-ispis-tabela',
  templateUrl: './ispis-tabela.component.html',
  styleUrls: ['./ispis-tabela.component.css']
})
export class IspisTabelaComponent implements OnInit {

  tables: IspisTabele[] = [];
  filteredTables: IspisTabele[] = [];
  tableNamesToShow: string[] = [ 'brands', 'price', 'images', 'models', 'colors', 'ram_specs'];

  constructor(private getTablesService: GetTablesService) {}

  ngOnInit(): void {
    this.getTablesService.getTables().subscribe(response => {
      this.tables = response.tables;
      this.filteredTables = this.tables.filter(table => this.tableNamesToShow.includes(table.Tables_in_angular_api));
    });
  }
}
