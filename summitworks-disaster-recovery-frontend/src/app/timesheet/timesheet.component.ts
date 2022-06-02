import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SiteobjectService } from '../_services/siteobject.service';

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

  constructor(private objectService: SiteobjectService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.closeForm();
  }

  onSubmit(): void {
    this.objectService.createObject(this.timesheetForm.value).subscribe(
      data => {
        this.closeForm();
        this.refresh();
      }, err => {
        alert('Error saving object: ' + err.error.message);
      }
    )
    this.timesheetForm.reset();
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
    this.objectService.getUsers().subscribe(
      data => {
        this.objects = data;
      }
    );
  }

  edit(id: any): void {

  }

  delete(id: any): void {
    this.objectService.deleteObject(id).subscribe(
      data => {
        this.refresh();
      }
    )
  }

}
