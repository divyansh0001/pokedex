import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerriesPageRoutingModule } from './berries-routing.module';

import { BerriesPage } from './berries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerriesPageRoutingModule
  ],
  declarations: [BerriesPage]
})
export class BerriesPageModule {}
