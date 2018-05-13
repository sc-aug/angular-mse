import { Component } from '@angular/core';
import { SearchService } from '../core/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [SearchService]
})
export class SearchPageComponent {
  musicList;
  constructor() { }

  loadMusicList(list) {
    this.musicList = list;
  }

}
