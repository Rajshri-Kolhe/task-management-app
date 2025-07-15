import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
// header.component.ts
constructor(public themeService: ThemeService, private router:Router, private auth:AuthService) {}
 isDarkMode = false;
 ngOnInit() {
    this.themeService.isDarkMode$.subscribe(value => {
      this.isDarkMode = value;
    });
  }
    toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
  navigateTo(){
    this.auth.logOutUser();
    this.router.navigate(['/app-carousel'])
  }
}
