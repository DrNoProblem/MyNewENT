import { startOfDay } from 'date-fns';
import {  Component} from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent{

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  addmention:boolean = false;
  setView(view: CalendarView) {
    this.view = view;
  }

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Maths',
    },
  ]


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = new Date();
    this.view = CalendarView.Week;
  }
  //https://bryntum.com/examples/calendar/recurrence/
}
