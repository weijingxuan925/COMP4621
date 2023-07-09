import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string | undefined;
  isLoggedIn: boolean = false;
  currentTime: Date = new Date();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // 从 Cookie 中获取用户名和登录状态
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('username=')) {
        this.username = cookie.substring('username='.length);
      } else if (cookie.startsWith('isLoggedIn=')) {
        this.isLoggedIn = cookie.substring('isLoggedIn='.length) === 'true';
      }
    }

    // 每秒更新当前时间
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  logout(): void {
    // 删除 Cookie
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // 更新登录状态
    this.isLoggedIn = false;

    // 跳转回主页
    this.router.navigate(['/main']).then(r => r);
  }
}
