import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarFicheirosPageRoutingModule } from './editar-ficheiros-routing.module';

import { EditarFicheirosPage } from './editar-ficheiros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarFicheirosPageRoutingModule
  ],
  declarations: [EditarFicheirosPage]
})
export class EditarFicheirosPageModule {}
