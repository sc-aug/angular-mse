import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Account } from '../account.interface';
import { AuthService } from '../../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl:string;
  
  constructor(
    private auth:AuthService,
    private router:Router,
    private route:ActivatedRoute) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    let data = form.value;
    this.login(data.email, data.password);
  }

  login(e: string, p: string) {
    this.auth.loginUser(e, p).subscribe(
      data => {
        //this.router.navigate([this.returnUrl]);
      },
      err => {
        console.log(err);
      }
    );
  }

}
