import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarFicheirosPageRoutingModule } from './selecionar-ficheiros-routing.module';

import { SelecionarFicheirosPage } from './selecionar-ficheiros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarFicheirosPageRoutingModule
  ],
  declarations: [SelecionarFicheirosPage]
})
export class SelecionarFicheirosPageModule {}
