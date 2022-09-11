import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  admin: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  //https://bryntum.com/examples/calendar/recurrence/
}