import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPadrePage } from './registro-padre.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPadrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPadrePageRoutingModule {}
