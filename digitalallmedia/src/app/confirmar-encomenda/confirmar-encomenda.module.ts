import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarEncomendaPageRoutingModule } from './confirmar-encomenda-routing.module';

import { ConfirmarEncomendaPage } from './confirmar-encomenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarEncomendaPageRoutingModule
  ],
  declarations: [ConfirmarEncomendaPage]
})
export class ConfirmarEncomendaPageModule {}
