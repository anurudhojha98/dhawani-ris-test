import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  ],
})
export class DashboardModule { }
