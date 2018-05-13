import { Component, OnInit, Input } from '@angular/core';

import { DbService } from '../../core/db.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [DbService]
})
export class ResultListComponent implements OnInit {
  @Input() musicList: any[];

  constructor(private dbService: DbService) { }

  ngOnInit() {
  }

  onAddFavMusicClick(event) {
    // console.log(event.target.id);
    this.addFavMusic(event.target.id);
  }

  addFavMusic(trackId: string) {
    this.dbService.addFav(trackId);
  }

}

