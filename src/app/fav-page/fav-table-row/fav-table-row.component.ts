import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../core/search.service';
import { DbService } from '../../core/db.service';

import { Music } from '../../music-page/music.interface';

@Component({
  selector: 'app-fav-table-row',
  templateUrl: './fav-table-row.component.html',
  styleUrls: ['./fav-table-row.component.css'],
  providers: [SearchService]
})
export class FavTableRowComponent implements OnInit {
  @Input() tId: any;
  music: Music;
  constructor(
    private searchService: SearchService,
    private dbService: DbService) { }

  ngOnInit() {
    this.searchService.retrieveMusicById(this.tId)
      .subscribe(data => {
        if (data) {
          this.music = data;
        } else {
          console.log("can not find");
        }
    });
  }

  onDelete(event) {
    const tId = event.target.value;
    console.log(tId);
    this.dbService.rmFavMusic(tId);
  }

}
