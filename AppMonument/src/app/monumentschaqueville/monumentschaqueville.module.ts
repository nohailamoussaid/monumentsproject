import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonumentschaquevillePageRoutingModule } from './monumentschaqueville-routing.module';

import { MonumentschaquevillePage } from './monumentschaqueville.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonumentschaquevillePageRoutingModule
  ],
  declarations: [MonumentschaquevillePage]
})
export class MonumentschaquevillePageModule {}
