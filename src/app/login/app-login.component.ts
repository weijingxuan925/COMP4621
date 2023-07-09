import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {
  username!: string;
  password!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://localhost:3000/api/login', credentials)
      .subscribe(
        (response: any) => {
          console.log('Login successful');
          console.log('Current logged-in user:', this.username);

          // 设置 Cookie
          document.cookie = `username=${this.username}`;
          document.cookie = `isLoggedIn=true`;

          this.snackBar.open('Login successful', 'OK', {
            duration: 3000
          });

          this.router.navigate(['/home']).then(r => r);
        },
        error => {
          console.error('Login failed');
          this.snackBar.open('Login failed', 'OK', {
            duration: 3000
          });
        }
      );
  }
}
