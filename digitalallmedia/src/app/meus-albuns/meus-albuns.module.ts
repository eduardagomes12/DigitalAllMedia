import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusAlbunsPageRoutingModule } from './meus-albuns-routing.module';

import { MeusAlbunsPage } from './meus-albuns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusAlbunsPageRoutingModule
  ],
  declarations: [MeusAlbunsPage]
})
export class MeusAlbunsPageModule {}
