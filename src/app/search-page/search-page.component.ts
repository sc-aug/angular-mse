import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  words = "";
  musicList;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSearch() {
    this.getSearchResult(this.words.trim().replace(/\s+/g, '+'));
  }

  getSearchResult(term: string) {
    this.searchService.dummyCall(term)
    .subscribe(data => {
      this.musicList = data['results'];
    })
  }

}
