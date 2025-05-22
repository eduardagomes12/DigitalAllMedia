import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarArquivoPageRoutingModule } from './adicionar-arquivo-routing.module';

import { AdicionarArquivoPage } from './adicionar-arquivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarArquivoPageRoutingModule
  ],
  declarations: [AdicionarArquivoPage]
})
export class AdicionarArquivoPageModule {}
