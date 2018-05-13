import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SearchService } from '../core/search.service';
import { Music } from '../music-page/music.interface'

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit, OnDestroy {
  artistStr: string;
  paramSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService) { }

  ngOnInit() {
    this.paramSub = this.route.params
      .subscribe(
        (param: Params) => {
          if (param.id) {
            this.getArtistDetail(param['id']);
          }
      });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

  getArtistDetail(artistId: string) {
    this.searchService.retrieveArtistById(artistId)
      .subscribe(data => {
        if (data) {
          this.artistStr = JSON.stringify(data);
        } else {
          console.log("can not find artist by ID");
        }
    });
  }

}
