import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FiltrosModalComponent } from './filtros-modal.component';

@NgModule({
  declarations: [FiltrosModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [FiltrosModalComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class FiltrosModalModule {}
