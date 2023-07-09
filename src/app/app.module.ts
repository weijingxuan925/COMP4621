import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { AppMainComponent } from './main/app-main.component';
import { AppLoginComponent } from './login/app-login.component';
import { AppRegisterComponent } from './register/app-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent} from "./home/home.component";
import { AuthGuard} from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent, // 在declarations数组中添加AppComponent
    AppMainComponent,
    AppLoginComponent,
    AppRegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // 添加此行
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule, // 添加此行
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard // 添加此行
  ],
  bootstrap: [AppComponent] // 将AppMainComponent替换为AppComponent
})
export class AppModule { }
