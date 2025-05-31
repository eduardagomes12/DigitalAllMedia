import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumPreviewPage } from './album-preview.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumPreviewPageRoutingModule {}
