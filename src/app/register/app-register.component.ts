import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent {
  username!: string;
  email!: string;
  password!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  register(): void {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    console.log('Form data:', user); // 输出表单数据到控制台

    // 密码正则表达式，至少8位，包含一个大写字母
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

    // 邮箱验证正则表达式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!passwordRegex.test(user.password)) {
      this.snackBar.open('Password must be at least 8 characters long and contain an uppercase letter.', 'OK', {
        duration: 3000,
        panelClass: 'custom-snackbar'
      });
      return;
    }

    if (!emailRegex.test(user.email)) {
      this.snackBar.open('Invalid email address.', 'OK', {
        duration: 3000
      });
      return;
    }

    this.http.post('http://localhost:3000/api/register', user)
      .subscribe(
        () => {
          console.log('Registration successful');
          this.snackBar.open('Registration successful', 'OK', {
            duration: 3000
          });
          this.router.navigate(['/login']); // 跳转到登录页面
        },
        error => {
          console.error('Registration failed');
          this.snackBar.open('Registration failed', 'OK', {
            duration: 3000
          });
        }
      );
  }
}
