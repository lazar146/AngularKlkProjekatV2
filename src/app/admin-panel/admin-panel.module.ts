import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { IspisTabelaComponent } from './components/ispis-tabela/ispis-tabela.component';
import { IspisTabeleIzabraneComponent } from './components/ispis-tabele-izabrane/ispis-tabele-izabrane.component';
import { BrandsAdminComponent } from './components/brands-admin/brands-admin.component';

import { UpdateComponentDvaComponent } from './components/update-component-dva/update-component-dva.component';
import { ColorsAdminComponent } from './components/colors-admin/colors-admin.component';
import { ImagesAdminComponent } from './components/images-admin/images-admin.component';
import { ModelsAdminComponent } from './components/models-admin/models-admin.component';
import { PriceAdminComponent } from './components/price-admin/price-admin.component';
import { RamSpecsAdminComponent } from './components/ram-specs-admin/ram-specs-admin.component';


@NgModule({
  declarations: [
    IspisTabelaComponent,
    IspisTabeleIzabraneComponent,
    BrandsAdminComponent,
  
    UpdateComponentDvaComponent,
        ColorsAdminComponent,
        ImagesAdminComponent,
        ModelsAdminComponent,
        PriceAdminComponent,
        RamSpecsAdminComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule 
  ]
})
export class AdminPanelModule { }
