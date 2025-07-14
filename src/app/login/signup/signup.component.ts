import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[MessageService]
})
export class SignupComponent {
  signUp!: FormGroup;
  constructor(private fb: FormBuilder, private signUpAuth: AuthService, private messageSer : MessageService, private routerr: Router) { }
  ngOnInit() {
    this.signUp = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSignUpSubmit() {
    if (this.signUp.invalid) {
      this,this.messageSer.add({
         severity: 'warn',
        summary: 'Validation Error',
        detail: 'Please fill in all required fields',
      })
      return
    }
    const { name, email, mobileNo, password } = this.signUp.value
    this.signUpAuth.signUp(name, email, mobileNo, password).subscribe({
      next: (resp: any) => {
      this.messageSer.add({
         severity: 'success',
        summary: 'Success',
        detail: resp.message || 'SignUp successfull',
      })
      this.routerr.navigate(['/login'])
      },
      error: errr => {
      this.messageSer.add({
         severity: 'error',
        summary: 'Failed',
        detail: errr.error.message || 'Signup failed',
      })
      }
    })


  }
}
