import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { DbService } from '../../core/db.service';

@Component({
  selector: '[app-result-table-row]',
  templateUrl: './result-table-row.component.html',
  styleUrls: ['./result-table-row.component.css']
})
export class ResultTableRowComponent implements OnInit {
  @Input() music;
  constructor(
    private authService: AuthService,
    private dbService: DbService) { }

  ngOnInit() {
  }

  onAddFavMusicClick(event) {
    this.addFavMusic(event.target.id);
  }

  addFavMusic(trackId: string) {
    this.dbService.addFavMusic(trackId)
      .subscribe(
        (resp) => console.log(resp),
        (err) => console.log(err)
      );
  }
  
  isLogin() {
    return this.authService.isAuthenticated();
  }

  heartClass(id: string) {
    return 'fa-heart';
    // return id in this.musicList ? 'fa-heart' : 'fa-heart-o';
  }
}
