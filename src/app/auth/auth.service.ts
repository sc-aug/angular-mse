import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router:Router) { }

    registerUser(username, password) {
        let registerObservable = Observable.fromPromise(firebase.auth().createUserWithEmailAndPassword(username, password)
        .then((res) => {
            console.log(res);
            this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
            .then((token:string) => {
                this.token = token;
                localStorage.setItem('userToken', token);
            });
        }).catch((error) => {
        console.log(error);
        }));

        return registerObservable;
    }
    
    loginUser(username, password) {
        let loginObservable = Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(username, password)
        .then((res) => {
            console.log(res);
            this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
            .then((token:string) => {
                this.token = token;
                localStorage.setItem('userToken', token);
            });
        }).catch((error) => {
        console.log(error);
        }));

        return loginObservable;
    }

    logoutUser() {
        firebase.auth().signOut();
        localStorage.removeItem('userToken');
        this.token = null;
    }

    isAuthenticated():boolean {
        return (localStorage.getItem('userToken') !== null) ?
            true : false;
    }

}