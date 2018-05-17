import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

const baseUrl = environment.secret["firebaseConfig"]["databaseURL"];
const dbname = 'profile';

@Injectable()
export class ProfileService {
    constructor(
        private authService: AuthService,
        private http: HttpClient) { }


    getProfile() {
        let token = this.authService.getToken();
        let doc = this.authService.getEmail().replace('@', '_').replace('.', '_');
        let url = `${baseUrl}/${dbname}/${doc}.json?auth=${token}`;

        return this.http.get(url)
            .pipe(
                // map(data => data),
                // tap(res => console.log(res)),
                catchError(error => of(`Bad Promise: ${error}`))
            );
    }

    updateProfile(newProfile) {
        let token = this.authService.getToken();
        let doc = this.authService.getEmail().replace('@', '_').replace('.', '_');
        let url = `${baseUrl}/${dbname}/${doc}.json?auth=${token}`;

        return this.http.put(url, newProfile)
            .pipe(
                // map(data => data),
                // tap(res => console.log(res)),
                catchError(error => of(`Bad Promise: ${error}`))
            );
    }
}