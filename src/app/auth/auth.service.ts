import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseurl: string = "https://mse-auth-api.firebaseio.com/";

@Injectable()
export class AuthService {

    constructor(private http: HttpClientModule) {}

    naiveRegister() {
        const str: string = "term=jack+johnson";
        return this.http;
    }

}