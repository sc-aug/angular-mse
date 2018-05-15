import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthService {
    private token: string;

    constructor(private router:Router) { }

    registerUser(email, password) {
        return Observable.fromPromise(firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                return res;
            }).catch((error) => {
                console.log(error);
            }));
    }
    
    loginUser(email, password) {
        return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                // login success get token
                firebase.auth().currentUser.getIdToken()
                .then((token:string) => {
                    this.token = token;
                    localStorage.setItem('user_token', token);
                    localStorage.setItem('email', email);
                });
                return res;
            })
            .catch((error) => console.log(error)));
    }

    logoutUser() {
        firebase.auth().signOut()
            .then(() => { })
            .catch(err => console.log(err));
        
        localStorage.removeItem('user_token');
        localStorage.removeItem('email');
        this.token = null;
    }

    isAuthenticated():boolean {
        return (
            localStorage.getItem('user_token') !== null &&
            localStorage.getItem('email') != null) ?
            true : false;
    }

    getToken() {
        return localStorage.getItem('user_token');
        // firebase.auth().currentUser.getIdToken()
        //     .then((t) => this.token = t);
        // return this.token;
    }

}