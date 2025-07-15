import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LogoutComponent,
   
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class ProfileModule { }
