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

    registerUser(email, password) {
        let registerObservable = Observable.fromPromise(firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res);
            // this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
            .then((token:string) => {
                this.token = token;
                localStorage.setItem('userToken', token);
                localStorage.setItem('email', email);
            });
        }).catch((error) => {
            console.log(error);
        }));

        return registerObservable;
    }
    
    loginUser(email, password) {
        let loginObservable = Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res);
            // this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
            .then((token:string) => {
                this.token = token;
                localStorage.setItem('userToken', token);
                localStorage.setItem('email', email);
            });
        }).catch((error) => {
            console.log(error);
        }));

        return loginObservable;
    }

    logoutUser() {
        firebase.auth().signOut()
            .then(() => { })
            .catch(err => console.log(err));
        
        localStorage.removeItem('userToken');
        localStorage.removeItem('email');
        this.token = null;
    }

    isAuthenticated():boolean {
        return (
            localStorage.getItem('userToken') !== null &&
            localStorage.getItem('email') != null) ?
            true : false;
    }

}