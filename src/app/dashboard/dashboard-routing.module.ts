import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamPerformanceComponent } from './team-performance/team-performance.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  { path: 'team-performance', component: TeamPerformanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
