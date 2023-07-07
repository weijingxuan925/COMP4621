import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { AppMainComponent } from './main/app-main.component';
import { AppLoginComponent } from './login/app-login.component';
import { AppRegisterComponent } from './register/app-register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, // 在declarations数组中添加AppComponent
    AppMainComponent,
    AppLoginComponent,
    AppRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 将AppMainComponent替换为AppComponent
})
export class AppModule { }
