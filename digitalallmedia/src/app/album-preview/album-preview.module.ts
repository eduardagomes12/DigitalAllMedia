import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlbumPreviewPage } from './album-preview.page';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AlbumPreviewPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AlbumPreviewPage }])
  ]
})
export class AlbumPreviewPageModule {}
