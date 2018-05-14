import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class DbService {
    db: any;
    auth: any;

    constructor(private router:Router) {
        this.db = firebase.firestore();
        this.auth = firebase.auth();
        console.log(this.db, this.auth);
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

    getFavList() {
        let email = this.getEmail();

        let favListObservable = Observable.fromPromise<any[]>(
            this.db.collection("fav-music").doc(email).get()
                .then((docSnapshot) => {
                    return Object.keys(docSnapshot.data());
                })
            );
        return favListObservable;
    }

    dummyCall1() {
        this.db.collection("fav-music").doc("ccc@gmail.com")
        .set({
            trackid: ["1012n01dn1"]
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    dummyCall2() {
        this.db.collection("fav-music").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });
    }

    dummyCall3() {
        this.db.collection("fav-music").doc("ccc@gmail.com")
        .set({ trackId: ["gg12a01dn1"] }, { merge: true })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    dummyCall4() {
        this.db.collection("fav-music").doc("ccc@gmail.com")
        .update({ trackId: ["123123", "123123"] })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    getEmail() {
        return localStorage.getItem("email");
    }
}