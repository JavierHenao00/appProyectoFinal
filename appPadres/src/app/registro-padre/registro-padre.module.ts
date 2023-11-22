import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPadrePageRoutingModule } from './registro-padre-routing.module';

import { RegistroPadrePage } from './registro-padre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPadrePageRoutingModule
  ],
  declarations: [RegistroPadrePage]
})
export class RegistroPadrePageModule {}
