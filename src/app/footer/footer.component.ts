import { Component, OnInit } from '@angular/core';
import { Info } from '../models/info';
import{GetInfoService} from '../home/buissness-logic/api/get-info.service';
import { subscribe } from 'diagnostics_channel';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
infos: Info | undefined; 


constructor(private getInfoService: GetInfoService) { } 

  ngOnInit(): void {
    this.getInfoService.getInfo().subscribe(info => {
     this.infos = info;
      console.log(info);
      
    })
  }
  
}
