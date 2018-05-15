import { Component, OnInit } from '@angular/core';
import { DbService } from '../core/db.service';

import { Music } from '../music-page/music.interface';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit {
  private favTrackList: any[];
  constructor(private dbService: DbService) {
  }

  ngOnInit() {
    //this.getFavMusicList();
    this.getFavMusicList();
  }

  getFavMusicList() {
    this.dbService.getFavMusicList()
      .subscribe(
        (data) => {
          this.favTrackList = Object.keys(data);
        },
        (err) => console.log(err)
      );
  }

}
