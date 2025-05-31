import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CriarAlbumPageRoutingModule } from './criar-album-routing.module';
import { CriarAlbumPage } from './criar-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarAlbumPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CriarAlbumPage]
})
export class CriarAlbumPageModule {}
