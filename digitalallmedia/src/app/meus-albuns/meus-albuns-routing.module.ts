import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusAlbunsPage } from './meus-albuns.page';

const routes: Routes = [
  {
    path: '',
    component: MeusAlbunsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusAlbunsPageRoutingModule {}
