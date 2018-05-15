import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  @Input() musicList: any[];

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  isLogin() {
    return this.authService.isAuthenticated();
  }
}
