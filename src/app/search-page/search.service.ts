import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { Music } from '../music.interface';

@Injectable()
export class SearchService {
    baseurl:string = 'https://itunes.apple.com/search';

    constructor(private http: HttpClient) {}

    dummyCall(term: string) {
        let tmp = `${this.baseurl}?term=${term}&media=music&limit=20`;
        return this.http.get<Music[]>(tmp, {responseType: 'json'})
        .pipe(
            tap( // Log the result or error
                data => console.log(data),
                error => console.log('error'))
        );
    }

}
