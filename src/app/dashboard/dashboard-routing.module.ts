import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then((m) => m.HomeModule) },
      { path: 'district', loadChildren: () => import('../district/district.module').then((m) => m.DistrictModule) },
      { path: 'state', loadChildren: () => import('../state/state.module').then((m) => m.StateModule) },
      { path: 'child', loadChildren: () => import('../child/child.module').then((m) => m.ChildModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
