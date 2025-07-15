import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkMode = new BehaviorSubject<boolean>(document.documentElement.classList.contains('dark'));
  isDarkMode$ = this._isDarkMode.asObservable();

 private readonly darkClass = 'dark';

  enableDarkMode() {
    document.documentElement.classList.add(this.darkClass);
    localStorage.setItem('theme', 'dark');
    this._isDarkMode.next(true); 
  }

  disableDarkMode() {
    document.documentElement.classList.remove(this.darkClass);
    localStorage.setItem('theme', 'light');
     this._isDarkMode.next(false);
  }

  toggleDarkMode() {
    const isDark = document.documentElement.classList.contains(this.darkClass);
    if (isDark) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains(this.darkClass);
  }

}
