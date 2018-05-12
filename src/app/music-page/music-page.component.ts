import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../core/search.service';
import { Music } from './music.interface';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent implements OnInit {
  music: any;
  musicStr: string;
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService) { }

  ngOnInit() {
    const qp = this.route.snapshot.queryParams;
    console.log(qp);
    if (qp['trackId'] && qp['artistId']) {
      this.getMusicDetail(qp['artistId'], qp['trackId']);
    }
  }

  getMusicDetail(artistId: string, trackId: string) {
    this.searchService.retrieveMusicById(artistId, trackId)
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
