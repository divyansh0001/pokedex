import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,children :[
      {
        path: 'main',
        loadChildren: () => import('../pages/main/main.module').then( m => m.MainPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'berries',
        loadChildren: () => import('../pages/berries/berries.module').then( m => m.BerriesPageModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
