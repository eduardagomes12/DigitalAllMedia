import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPrintTypePage } from './select-print-type.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPrintTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPrintTypePageRoutingModule {}
