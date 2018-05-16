import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    declarations: [
        AuthComponent,
        RegisterComponent,
        LoginComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }