import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Account } from '../account.interface';
import { AuthService } from '../../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  returnUrl:string;
  
  constructor(
    private auth:AuthService,
    private router:Router,
    private route:ActivatedRoute) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    let data = form.value;
    this.register(data.email, data.password);
  }

  register(e: string, p: string) {
    this.auth.registerUser(e, p).subscribe(
      data => {
        //this.router.navigate([this.returnUrl]);
      },
      err => {
        console.log(err);
      }
    );
  }



}
