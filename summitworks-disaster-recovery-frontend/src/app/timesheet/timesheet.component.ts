import { Component, OnInit } from '@angular/core';
import { SiteobjectService } from '../_services/siteobject.service';
import { TimesheetService } from '../_services/timesheet.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  rawTimesheets: any = [];
  timesheets = new Map<string, any>();
  costs = new Map<string, any>();
  dataObjects = new Map<string, any>();
  constructor(private timesheetService: TimesheetService, private siteobjects: SiteobjectService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.timesheetService.getAllTimesheets().subscribe(
      data => {
        console.log('refreshing...');
        this.rawTimesheets = data;
        this.loadData();
      }, err => {
        alert('Error: ' + err.error.message);
      }
    )
  }

  loadData() {
    this.dataObjects.clear();
    this.costs.clear();
    for (let i = 0; i < this.rawTimesheets.length; i++) {
      let timesheet = this.rawTimesheets[i];
      this.timesheets.set(timesheet.id, timesheet);
      this.timesheetService.getTimesheetCost(timesheet.id).subscribe(
        data => {
          this.costs.set(timesheet.id, data);
        }
      );
    }
  }

  getTotalHours(timesheedId: string): number {
    let total = 0;
    for (let i = 0; i < this.timesheets.get(timesheedId).siteObject.length; i++) {
      total += this.timesheets.get(timesheedId).siteObject[i].hoursWorked;
    }
    return total;
  }

  getTotalCost(timesheedId: string): number {
    return this.costs.get(timesheedId);
  }

  getDataObjects(timesheetId: string) {
    return this.dataObjects.get(timesheetId);
  }

  getDataByType(timesheetId: string, type: number) {
    let typed: any = [];
    let data = this.dataObjects.get(timesheetId);
    for (let i = 0; i < data.length; i++) {
      let obj = data[i];
      if (obj.type == type) {
        typed.push(data);
      }
    }

    return typed;
  }

  approve(timesheetId: string) {
    this.timesheetService.approveTimesheet(timesheetId).subscribe(
      data => {
        this.refresh();
      }
    );
  }
  
  deny(timesheetId: string) {
    this.timesheetService.deleteTimesheet(timesheetId).subscribe(
      data => {
        this.refresh();
      }
    );
  }

}
