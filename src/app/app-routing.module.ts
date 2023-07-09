import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './main/app-main.component';
import { AppLoginComponent } from './login/app-login.component';
import { AppRegisterComponent } from './register/app-register.component';
import { HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }, // 修改为相对路径
  { path: 'main', component: AppMainComponent },
  { path: 'login', component: AppLoginComponent },
  { path: 'register', component: AppRegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // 添加此行
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
