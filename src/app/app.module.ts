import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'search', component: SearchPageComponent },
  {path: 'fav', component: FavPageComponent },
  {path: 'about', component: AboutPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    HomePageComponent,
    SearchPageComponent,
    FavPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
