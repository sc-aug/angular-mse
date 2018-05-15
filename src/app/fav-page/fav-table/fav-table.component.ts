import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-fav-table',
  templateUrl: './fav-table.component.html',
  styleUrls: ['./fav-table.component.css']
})
export class FavTableComponent implements OnInit {
  @Input() trackIdList: any[];
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLogin() {
    this.authService.isAuthenticated();
  }

}
