import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMainComponent } from './app-main.component';
import {AppLoginComponent} from "./login/app-login.component";
import {AppRegisterComponent} from "./register/app-register.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppMainComponent,
    AppLoginComponent,
    AppRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // 或者 ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppMainComponent]
})
export class AppModule { }
