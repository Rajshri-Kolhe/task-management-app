import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
constructor(private authService:AuthService, private router:Router){}
ngOnInit(){
  this.authService.logOutUser();
  this.router.navigate(['/app-carousel'])
}
}
