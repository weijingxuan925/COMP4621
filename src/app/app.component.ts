import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'A3';
  username: string = '';
  password: string = '';

  login() {
    // 这里可以编写发送登录请求的代码，比如使用 Angular 的 HttpClient 发送 POST 请求到服务器
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // 在实际应用中，你应该将用户名和密码发送到服务器进行验证，并根据返回的结果执行相应的操作
  }
}
