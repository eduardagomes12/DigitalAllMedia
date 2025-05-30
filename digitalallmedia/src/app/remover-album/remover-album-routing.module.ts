import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoverAlbumPage } from './remover-album.page';

const routes: Routes = [
  {
    path: '',
    component: RemoverAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoverAlbumPageRoutingModule {}
