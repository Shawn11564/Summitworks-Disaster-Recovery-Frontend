import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TimesheetService } from '../_services/timesheet.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {


  form: any = {};
  objects: any = []

  timesheetForm = this.formBuilder.group({
    id: '',
    contractorName: '',
    siteCode: '',
    hourlyRate: '',
    maxHoursPerDay: ''
  });

  constructor(private timesheetService: TimesheetService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.closeForm();
  }

  onSubmit(): void {
    // this.timesheetService.createObject(this.timesheetForm.value).subscribe(
    //   data => {
    //     this.closeForm();
    //     this.refresh();
    //   }, err => {
    //     alert('Error saving object: ' + err.error.message);
    //   }
    // )
    // this.timesheetForm.reset();
  }

  openForm(): void {
    document.getElementById("form")!.style.display = "block";
  }

  closeForm(): void {
    document.getElementById("form")!.style.display = "none";
  }

  createObject(): void {

  }

  refresh(): void {
    this.timesheetService.getAllTimesheets().subscribe(
      data => {
        this.objects = data;
      }, err => {
        alert('Error: ' + err.error.message);
      }
    );
  }

  edit(id: any): void {

  }

  addSiteObjectToTimesheet(timesheetId: string, siteobjectId: string) {
    this.timesheetService.addSiteObjectToTimesheet(timesheetId, siteobjectId).subscribe(
      data => {
        this.refresh();
      }, err => {
        alert('Error: ' + err.error.message);
      }
    )
  }

  delete(id: any): void {
    this.timesheetService.deleteTimesheet(id).subscribe(
      data => {
        this.refresh();
      }, err => {
        alert('Error: ' + err.error.message);
      }
    )
  }

}
