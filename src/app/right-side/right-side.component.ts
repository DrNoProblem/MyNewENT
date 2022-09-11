import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class MentionListComponent implements OnInit {

  constructor() { }
  
  excuse:string = '';
  ngOnInit(): void {
  }

}
