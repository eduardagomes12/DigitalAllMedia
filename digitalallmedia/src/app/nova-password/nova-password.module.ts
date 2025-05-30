import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaPasswordPageRoutingModule } from './nova-password-routing.module';

import { NovaPasswordPage } from './nova-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaPasswordPageRoutingModule
  ],
  declarations: [NovaPasswordPage]
})
export class NovaPasswordPageModule {}
