import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './main/app-main.component';
import { AppLoginComponent } from './login/app-login.component';
import { AppRegisterComponent } from './register/app-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: AppMainComponent },
  { path: 'login', component: AppLoginComponent },
  { path: 'register', component: AppRegisterComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
