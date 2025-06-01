import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPrintTypePageRoutingModule } from './select-print-type-routing.module';

import { SelectPrintTypePage } from './select-print-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPrintTypePageRoutingModule
  ],
  declarations: [SelectPrintTypePage]
})
export class SelectPrintTypePageModule {}
