import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarFicheirosPage } from './editar-ficheiros.page';

const routes: Routes = [
  {
    path: '',
    component: EditarFicheirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarFicheirosPageRoutingModule {}
