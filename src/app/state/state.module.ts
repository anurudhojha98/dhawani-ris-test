import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';

@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    MaterialModule,
  ],
})
export class StateModule { }
