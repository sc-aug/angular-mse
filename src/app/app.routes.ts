import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AuthComponent } from './auth/auth.component';

import { AUTH_ROUTES } from './auth/auth.routes';

const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'fav', component: FavPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'auth', component: AuthComponent, children: AUTH_ROUTES }
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES, { useHash: true });
