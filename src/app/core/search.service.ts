import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { environment } from '../../environments/environment';
import { Music } from '../music-page/music.interface';

const baseurl:string = environment["itunes-api-url"];

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {}

  searchByTerm(term: string) {
    let tmp = `${baseurl}search?term=${term}&media=music&limit=20`;
    return this.http.get<Music[]>(tmp, {responseType: 'json'})
    .pipe(
      catchError(error => of(`Bad Promise: ${error}`))
    );
  }

  retrieveMusicById(artistId: string, trackId: string) {
    let url = `${baseurl}lookup?id=${artistId}&entity=song`;
    return this.http.get<Music>(url, {responseType: 'json'})
    .pipe(
        map(data => data['results']),
        map((music) => {
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
