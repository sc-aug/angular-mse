import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { environment } from '../../environments/environment';
import { Music } from '../music-page/music.interface';

@Injectable()
export class SearchService {
  baseurl:string = environment["itunes-api-url"] +'/search';

  constructor(private http: HttpClient) {}

  dummyCall(term: string) {
    let tmp = `${this.baseurl}?term=${term}&media=music&limit=20`;
    return this.http.get<Music[]>(tmp, {responseType: 'json'})
    .pipe(
      catchError(error => of(`Bad Promise: ${error}`))
    );
  }

}
