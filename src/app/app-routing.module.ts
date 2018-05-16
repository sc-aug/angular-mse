import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ProfileComponent } from './profile/profile.component';

// Guard
import { AuthGuard } from './auth/auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'fav', component: FavPageComponent, canActivate: [AuthGuard] },
  // { path: 'search', loadChildren: './search-page/search-page.module#SearchPageModule' },
  // { path: 'fav', loadChildren: './fav-page/fav-page.module#FavPageModule' },
  { path: 'music', redirectTo: '/search', pathMatch: 'full' },
  { path: 'music/:id', component: MusicPageComponent },
  { path: 'artist', redirectTo: '/search', pathMatch: 'full' },
  { path: 'artist/:id', component: ArtistPageComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
