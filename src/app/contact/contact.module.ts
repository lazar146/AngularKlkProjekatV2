import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FormaComponent } from './component/page/components/forma/forma.component';
import { AboutComponent } from './component/page/components/about/about.component';
import { PageComponent } from './component/page/page.component';


@NgModule({
  declarations: [
    FormaComponent,
    AboutComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
