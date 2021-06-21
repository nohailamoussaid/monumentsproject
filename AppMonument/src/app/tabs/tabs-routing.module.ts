import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path : 'monument',
        loadChildren: () => import('../monument/monument.module').then( m => m.MonumentPageModule)
      },
      {
        path : 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },

      {
        path : 'villes',
        loadChildren: () => import('../villes/villes.module').then( m => m.VillesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
