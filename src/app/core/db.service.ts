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

import { Music } from '../music-page/music.interface';

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

        return this.http.delete(url);
    }

    getFavMusicList() {
        let token = this.authService.getToken();
        let dbname = this.getEmail().replace('@', '_').replace('.', '_');
        let url = `${baseUrl}/music_db/${dbname}.json?auth=${token}`;

        return this.http.get<Music[]>(url)
            .pipe(
                map(data => Object.keys(data)),
                // tap(res => console.log(res)),
                catchError(error => of(`Bad Promise: ${error}`))
            );
    }

    getEmail() {
        return localStorage.getItem("email");
    }

    //////////// below. using firestore beta ////////////

    getFavList() {
        let email = this.getEmail();

        let favListObservable = Observable.fromPromise<Music[]>(
            this.db.collection("fav-music").doc(email).get()
                .then((docSnapshot) => {
                    return Object.keys(docSnapshot.data());
                })
            );
        return favListObservable;
    }


    addFav(trackId: string) {
        let email = this.getEmail();
        let item = {};
        item[trackId] = [];

        this.auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("We are authenticated now!");

                this.db.collection("fav-music").doc(email)
                    .set(item, { merge: true })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });

            } else {
                console.log("MYERROR: login first please.");
            }
        });
            
    }

    rmFav(trackId: string) {
        let email = this.getEmail();
        let item = {};
        item[trackId] = firebase.firestore.FieldValue.delete();

        this.auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("We are authenticated now!");
                    
                this.db.collection("fav-music").doc(email)
                .update({item})
                .then(function() {
                    console.log("trackId removed!");
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error removing trackId from doc: ", error);
                });

            } else {
                console.log("MYERROR: login first please.");
            }
        });
    }

}