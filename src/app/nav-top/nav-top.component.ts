import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLogin() {
    return this.authService.isAuthenticated();
  }

}
