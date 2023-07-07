import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {
  username: any;
  password: any;
  login() {
    // 在这里添加处理登录的逻辑
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // 可以发送登录请求或执行其他操作
  }
}
