import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class DbService {

    constructor(private router:Router) { }

    tmp() {
        let db = firebase.firestore();
        console.log(db);
    }

}