import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  showSidebar = false;
  constructor(private router:Router){}
  ngOnInit(){
    this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd) // ✅ type guard
    )
    .subscribe((event) => {
      this.showSidebar = event.urlAfterRedirects === '/dashboard';
    });
  }
}
