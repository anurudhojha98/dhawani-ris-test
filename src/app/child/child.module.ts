import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { AddChildComponent } from './add-child/add-child.component';
import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [ChildComponent, AddChildComponent, ViewChildComponent],
  imports: [
    CommonModule,
    ChildRoutingModule,
    MaterialModule,
  ],
})
export class ChildModule { }
