import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAlbumPageRoutingModule } from './editar-album-routing.module';

import { EditarAlbumPage } from './editar-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAlbumPageRoutingModule
  ],
  declarations: [EditarAlbumPage]
})
export class EditarAlbumPageModule {}
