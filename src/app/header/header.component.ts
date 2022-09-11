import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  log_in:boolean = false;
  btnlog_in:boolean = true;
  ngOnInit(): void {
  }

}
