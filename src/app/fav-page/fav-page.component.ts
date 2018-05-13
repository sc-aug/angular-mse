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
    this.dbService.getFavList()
      .subscribe((list) => {
        if (list) {
          this.favList = list
        } else {
          console.log("fetch favorite list failed");
        }
      });
  }

  onButton1() {
    this.dbService.dummyCall1();
  }

  onButton2() {
    this.dbService.dummyCall2()
  }

  onButton3() {
    this.dbService.dummyCall3()
  }

  onButton4() {
    this.dbService.dummyCall4()
  }
}
