import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import {environment} from '../../environments/environment';
import { AuthService } from './auth.service';

const baseUrl = environment.secret["firebaseConfig"]["databaseURL"];

@Injectable()
export class DbService {
    db: any;
    auth: any;

    constructor(
        private router:Router,
        private http: HttpClient,
        private authService: AuthService) {

        this.db = firebase.firestore();
        this.auth = firebase.auth();
    }

    addFavMusic(trackId: string) {
        let token = this.authService.getToken();
        let dbname = this.getEmail().replace('@', '_').replace('.', '_');
        let url = `${baseUrl}/music_db/${dbname}/${trackId}.json?auth=${token}`;

        return this.http.put(url, trackId);
    }

    rmFavMusic(trackId: string) {
        let token = this.authService.getToken();
        let dbname = this.getEmail().replace('@', '_').replace('.', '_');
        let url = `${baseUrl}/music_db/${dbname}/${trackId}.json?auth=${token}`;

        return this.http.delete(url)
            .pipe(
                tap(data => console.log(data)),
                catchError(error => of(`Bad Promise: ${error}`))
            );
    }

    getFavMusicList() {
        let token = this.authService.getToken();
        let dbname = this.getEmail().replace('@', '_').replace('.', '_');
        let url = `${baseUrl}/music_db/${dbname}.json?auth=${token}`;

        return this.http.get<any[]>(url)
            .pipe(
                // map(data => data),
                // tap(res => console.log(res)),
                catchError(error => of(`Bad Promise: ${error}`))
            );
    }

    getEmail() {
        return localStorage.getItem("email");
    }

}