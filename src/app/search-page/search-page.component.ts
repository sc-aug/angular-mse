import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  words = "";
  temp = null;
  musicList;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSearch() {
    this.searchService.dummyCall("jack+johnson")
    .subscribe(data => {
      console.log(data);
      this.musicList = data['results'];
    })
  }

}
