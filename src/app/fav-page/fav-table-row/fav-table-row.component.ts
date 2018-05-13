import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../core/search.service';

@Component({
  selector: 'app-fav-table-row',
  templateUrl: './fav-table-row.component.html',
  styleUrls: ['./fav-table-row.component.css'],
  providers: [SearchService]
})
export class FavTableRowComponent implements OnInit {
  @Input() tId;
  music;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.retrieveMusicById(this.tId)
    .subscribe(data => {
      if (data) {
        this.music = JSON.stringify(data);
      } else {
        console.log("can not find");
      }
  });
  }

}
