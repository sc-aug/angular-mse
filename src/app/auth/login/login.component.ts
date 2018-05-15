import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  returnUrl:string;
  
  constructor(
    private authService:AuthService,
    private router:Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    let data = form.value;
    this.loginUser(data.email, data.password);
  }

  loginUser(e: string, p: string) {
    this.authService.loginUser(e, p).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.router.navigate(['']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
