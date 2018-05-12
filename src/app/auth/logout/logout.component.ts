import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent  {

  constructor(private authService: AuthService, private router: Router) {
    this.onLogout();
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/auth', 'signin']);
  }

}
