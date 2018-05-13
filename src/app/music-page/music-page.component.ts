import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SearchService } from '../core/search.service';
import { Music } from './music.interface';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css'],
  providers: [SearchService]
})
export class MusicPageComponent implements OnInit, OnDestroy {
  music: any;
  musicStr: string;
  paramSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService) { }

  ngOnInit() {
    this.paramSub = this.route.params
    .subscribe(
      (param: Params) => {
        if (param.id) {
          this.getMusicDetail(param['id']);
        }
    });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

  getMusicDetail(trackId: string) {
    this.searchService.retrieveMusicById(trackId)
      .subscribe(data => {
        if (data) {
          this.music = data;
          this.musicStr = JSON.stringify(data);
        } else {
          console.log("can not find");
        }
    });
  }

}
