import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-part',
  templateUrl: './admin-part.component.html',
  styleUrls: ['./admin-part.component.css']
})
export class AdminPartComponent implements OnInit {

  constructor() { }
  classe:string = "";
  classeask:boolean = false;
  ngOnInit(): void {
  }

}
