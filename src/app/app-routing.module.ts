import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SignupComponent } from './login/signup/signup.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
{
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'app-carousel', pathMatch: 'full' },
      { path: 'app-carousel', component: CarouselComponent },
      { path: 'login', component: LoginComponent },
      {path:'signUp',component:SignupComponent},
    ]
  },
    {
    path:'',component:DashboardLayoutComponent,
    children:[
      {path:'dashboard',
        loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path:'tasks',
        loadChildren:()=>import('./tasks/tasks.module').then(m=>m.TasksModule)
      },
      {
        path:'profile',
        loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
