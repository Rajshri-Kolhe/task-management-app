import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
sidebarCollapsed = false;

toggleSidebar() {
  this.sidebarCollapsed = !this.sidebarCollapsed;
}
}
