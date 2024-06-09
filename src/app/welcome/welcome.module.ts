import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { LastestProdComponent } from './components/first/components/lastest-prod/lastest-prod.component';

import { FirstComponent } from './components/first/first.component';
import { AboutComponent } from './components/first/components/about/about.component';


@NgModule({
  declarations: [
    LastestProdComponent,
    FirstComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
