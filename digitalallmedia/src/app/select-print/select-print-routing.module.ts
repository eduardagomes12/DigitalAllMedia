import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPrintPage } from './select-print.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPrintPageRoutingModule {}
