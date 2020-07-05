import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddChildComponent } from './add-child/add-child.component';
import { ChildComponent } from './child.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  { path: '', component: ChildComponent },
  { path: 'add-child', component: AddChildComponent },
  { path: 'view-child', component: ViewChildComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildRoutingModule { }
