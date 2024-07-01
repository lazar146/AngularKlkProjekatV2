import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IspisTabelaComponent } from './components/ispis-tabela/ispis-tabela.component';

const routes: Routes = [
  { path: '', component: IspisTabelaComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
