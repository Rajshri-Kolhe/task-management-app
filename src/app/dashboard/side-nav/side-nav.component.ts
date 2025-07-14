import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
 @Input() collapsed = false; 

  expandedSections: { [key: string]: boolean } = {
    dashboard: false,
    tasks: false,
    profile: false
  };

  toggle(section: string): void {
      this.expandedSections[section] = !this.expandedSections[section];
    }
  
}
