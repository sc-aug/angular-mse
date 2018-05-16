import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './auth-guard.service';

const authRoutes: Routes = [
  { path: 'auth', component: AuthComponent, children: [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }