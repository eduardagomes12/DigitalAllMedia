import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionarFicheirosPage } from './selecionar-ficheiros.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarFicheirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionarFicheirosPageRoutingModule {}
