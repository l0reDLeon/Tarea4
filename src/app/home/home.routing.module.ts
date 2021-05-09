import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'display',
        loadChildren: () => import('../amiibo/display/display.module').then(m => m.DisplayModule)
      }
    ]
  },
  {
    path:'',
    redirectTo: '/',
    pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomeRoutingModule {}
