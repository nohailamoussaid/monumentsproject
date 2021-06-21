import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonumentschaquevillePage } from './monumentschaqueville.page';

const routes: Routes = [
  {
    path: '',
    component: MonumentschaquevillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonumentschaquevillePageRoutingModule {}
