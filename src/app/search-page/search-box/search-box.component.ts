import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../../core/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers: [SearchService]
})
export class SearchBoxComponent implements OnInit {

  term = "";
  @Output() onSearchEvent = new EventEmitter<any>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSearch() {
    this.getSearchResult(this.term.trim().replace(/\s+/g, '+'));
  }

  getSearchResult(term: string) {
    this.searchService.searchMusicByTerm(term)
    .subscribe(data => {
      this.onSearchEvent.emit(data['results']);
    })
  }



}
