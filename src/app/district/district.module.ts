import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { DistrictRoutingModule } from './district-routing.module';
import { DistrictComponent } from './district.component';

@NgModule({
  declarations: [DistrictComponent],
  imports: [
    CommonModule,
    DistrictRoutingModule,
    MaterialModule,
  ],
})
export class DistrictModule { }
