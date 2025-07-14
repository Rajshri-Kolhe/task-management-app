import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
 user: User | null = null;
  editForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private messageService:MessageService
  ) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (data) => {
        this.user = data;
        this.editForm = this.fb.group({
          name: [data.name],
          email: [data.email],
          mobileNo: [data.mobileNo]
        });
      },
      error: (err) => console.error(err)
    });
  }

 onSubmit() {
  const userId = +localStorage.getItem('userId')!;
  this.authService.updateUser(userId, this.editForm.value).subscribe({
    next: (res) => {
       this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message || 'Profile edited Successfully',
        })
setTimeout(() => {
  this.router.navigate(['/profile']);
}, 1000); 
    },
    error: (err) => {
    }
  });
}

}
