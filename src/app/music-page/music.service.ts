import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { catchError, map, filter, tap } from 'rxjs/operators';

import { Music } from './music.interface';

@Injectable()
export class MusicService {
    baseurl:string = 'https://itunes.apple.com/';

    constructor(private http: HttpClient) {}

    retrieveMusicById(artistId: string, trackId: string) {
        let url = `${this.baseurl}lookup?id=${artistId}&entity=song`;
        return this.http.get<Music>(url, {responseType: 'json'})
        .pipe(
            map(data => data['results']),
            map((music) => {

            debugger;
                for (let index in music) {
                    if (music[index]['trackId'] === +trackId) {
                        return music[index];
                    }
                }
                return null;
            }),
            tap( // Log the result or error
                data => console.log(data),
                error => console.log(error))
        );
    }

}
