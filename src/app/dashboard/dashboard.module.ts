import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/chart';
import { TeamPerformanceComponent } from './team-performance/team-performance.component'
@NgModule({
  declarations: [
    DashboardComponent,
    DashboardLayoutComponent,
    SideNavComponent,
    TeamPerformanceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule,
    ChartModule
  ]
})
export class DashboardModule { }
