import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AuthComponent } from './auth/auth.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';

import { AppRoutes } from './app.routes';
import { ResultListComponent } from './search-page/result-list/result-list.component';

import { SearchService } from './search-page/search.service';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    HomePageComponent,
    SearchPageComponent,
    FavPageComponent,
    AboutPageComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [
    SearchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
