import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, NgForm } from '@angular/forms';
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
    this.registerUser(data.email, data.password);
  }

  registerUser(e: string, p: string) {
    this.auth.registerUser(e, p).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/auth', 'login']);
      },
      err => {
        console.log(err);
      }
    );
  }



}
