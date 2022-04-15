import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerriesPage } from './berries.page';

const routes: Routes = [
  {
    path: '',
    component: BerriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerriesPageRoutingModule {}
