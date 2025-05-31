import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherMusicaPageRoutingModule } from './escolher-musica-routing.module';

import { EscolherMusicaPage } from './escolher-musica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherMusicaPageRoutingModule
  ],
  declarations: [EscolherMusicaPage]
})
export class EscolherMusicaPageModule {}
