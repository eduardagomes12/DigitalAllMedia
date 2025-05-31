import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPrintPageRoutingModule } from './select-print-routing.module';

import { SelectPrintPage } from './select-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPrintPageRoutingModule
  ],
  declarations: [SelectPrintPage]
})
export class SelectPrintPageModule {}
