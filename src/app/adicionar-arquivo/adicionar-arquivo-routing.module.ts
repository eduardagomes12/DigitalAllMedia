import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarArquivoPage } from './adicionar-arquivo.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarArquivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarArquivoPageRoutingModule {}
