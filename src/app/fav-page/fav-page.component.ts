import { Component, OnInit } from '@angular/core';

import { DbService } from '../core/db.service';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit {
  db: any;
  constructor(private dbService: DbService) { }

  ngOnInit() {
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
