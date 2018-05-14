import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLogin() {
    return this.authService.isAuthenticated();
  }
}
