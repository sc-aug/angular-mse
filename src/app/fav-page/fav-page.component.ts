import { Component, OnInit } from '@angular/core';
import { DbService } from '../core/db.service';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit {
  db: any;
  favList: any[];
  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.dbService.getFavMusicList()
      .subscribe(
        (list) => this.favList = <any[]>list,
        (err) => console.log(err)
      );
  }

}
