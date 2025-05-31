import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherMusicaPage } from './escolher-musica.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherMusicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherMusicaPageRoutingModule {}
