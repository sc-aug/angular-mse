import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Common Components
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { HomePageComponent } from './home-page/home-page.component';

// Favorite
// import { FavPageComponent } from './fav-page/fav-page.component';
// import { FavTableComponent } from './fav-page/fav-table/fav-table.component';
// import { FavTableRowComponent } from './fav-page/fav-table-row/fav-table-row.component';
// Search
// import { SearchPageComponent } from './search-page/search-page.component';
// import { SearchBoxComponent } from './search-page/search-box/search-box.component';
// import { ResultTableComponent } from './search-page/result-table/result-table.component';
// import { ResultTableRowComponent } from './search-page/result-table-row/result-table-row.component';
// Auth
// import { AuthComponent } from './auth/auth.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { LogoutComponent } from './auth/logout/logout.component';
// Other
import { MusicPageComponent } from './music-page/music-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ProfileComponent } from './profile/profile.component';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Serivces
import { SearchService } from './core/search.service';
import { AuthService } from './core/auth.service';
import { DbService } from './core/db.service';
// Guard
import { AuthGuard } from './auth/auth-guard.service';
// My module
import { AuthModule } from './auth/auth.module';
import { SearchPageModule } from './search-page/search-page.module';
import { FavPageModule } from './fav-page/fav-page.module';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    HomePageComponent,
    MusicPageComponent,
    ArtistPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    SearchPageModule,
    FavPageModule,
    AppRoutingModule
  ],
  providers: [
    // SearchService,
    AuthService,
    DbService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
