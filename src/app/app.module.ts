import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Common Components
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';
import { AuthComponent } from './auth/auth.component';
// Search
import { SearchPageComponent } from './search-page/search-page.component';
import { ResultListComponent } from './search-page/result-list/result-list.component';
// Auth
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
// Other
import { MusicPageComponent } from './music-page/music-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
// Routing
import { AppRoutes } from './app.routes';
// Serivces
import { SearchService } from './core/search.service';
import { AuthService } from './core/auth.service';
import { DbService } from './core/db.service';
import { SearchBoxComponent } from './search-page/search-box/search-box.component';
import { FavTableComponent } from './fav-page/fav-table/fav-table.component';
import { FavTableRowComponent } from './fav-page/fav-table-row/fav-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    HomePageComponent,
    SearchPageComponent,
    FavPageComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ResultListComponent,
    MusicPageComponent,
    ArtistPageComponent,
    SearchBoxComponent,
    FavTableComponent,
    FavTableRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [
    // SearchService,
    AuthService,
    DbService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
