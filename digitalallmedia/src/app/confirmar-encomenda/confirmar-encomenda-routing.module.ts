import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarEncomendaPage } from './confirmar-encomenda.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarEncomendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarEncomendaPageRoutingModule {}
