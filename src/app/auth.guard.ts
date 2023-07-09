import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // 在这里检查用户是否已登录，例如通过检查用户的身份验证令牌或其他标识
    const isLoggedIn = this.checkIfUserIsLoggedIn();

    if (!isLoggedIn) {
      // 用户未登录，导航到登录页
      window.alert('Please login first');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  private checkIfUserIsLoggedIn(): boolean {
    // 从 Cookie 中获取用户登录状态
    return document.cookie.includes('isLoggedIn=true');
  }
}
