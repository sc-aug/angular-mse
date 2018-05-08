import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  test: string = "testing string interpolation";

  constructor() { }

  ngOnInit() {
  }

  hello() {
    return "from method";
  }

  onClick() {
    console.log("click");
  }

}
