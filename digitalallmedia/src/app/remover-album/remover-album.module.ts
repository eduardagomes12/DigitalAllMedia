import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoverAlbumPageRoutingModule } from './remover-album-routing.module';

import { RemoverAlbumPage } from './remover-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoverAlbumPageRoutingModule
  ],
  declarations: [RemoverAlbumPage]
})
export class RemoverAlbumPageModule {}
