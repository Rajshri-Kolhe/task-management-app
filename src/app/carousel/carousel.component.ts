import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  constructor(private routerr:Router){}
loginPage(){
  this.routerr.navigate(['/login'])
}
signUpPage(){
  this.routerr.navigate(['/signUp'])
}
}
