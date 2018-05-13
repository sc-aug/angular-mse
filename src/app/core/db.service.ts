import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class DbService {
    db: any;

    constructor(private router:Router) {
        this.db = firebase.firestore();
    }

    addFav() {
        let uId = "";
        this.db.collection("fav-music").get().then((col) => {
        });
    }

    rmFav() {
        
    }

    listFav() {
        this.db.collection("fav-music").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });
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

}