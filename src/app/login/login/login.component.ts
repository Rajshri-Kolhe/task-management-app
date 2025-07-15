import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  loginForm !: FormGroup;
  constructor(private fbb: FormBuilder, private loginAuthService: AuthService, private messageService: MessageService, private router:Router) { }
  ngOnInit() {
    this.loginForm = this.fbb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Validation Error',
        detail: 'Please fill in all required fields',
      });
      return;
    }
    const { email, password } = this.loginForm.value;
    this.loginAuthService.login(email, password).subscribe({
      next: (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message || 'Login Successful',
        })
        this.router.navigate(['/dashboard'])
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message || 'Login failed',
        });
      }
    })
  }

}