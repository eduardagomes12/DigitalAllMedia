import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryDetailsPage } from './delivery-details.page';

// Define the route configuration for the DeliveryDetailsPage
const routes: Routes = [
  {
    path: '',
    component: DeliveryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryDetailsPageRoutingModule {}
