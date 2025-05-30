import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarAlbumPage } from './criar-album.page';

const routes: Routes = [
  {
    path: '',
    component: CriarAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarAlbumPageRoutingModule {}
