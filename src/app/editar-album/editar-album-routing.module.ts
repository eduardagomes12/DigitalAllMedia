import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAlbumPage } from './editar-album.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAlbumPageRoutingModule {}
