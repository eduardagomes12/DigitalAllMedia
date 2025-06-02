import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FiltrosModalComponent } from './filtros-modal.component';

@NgModule({
  declarations: [FiltrosModalComponent], // ✅ Agora permitido, pois não é mais standalone
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [FiltrosModalComponent], // ✅ Exportado para uso externo
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ Suporta elementos do Ionic
})
export class FiltrosModalModule {}
