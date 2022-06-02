import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SiteobjectService } from '../_services/siteobject.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {

  jobs: any = [];
  machines: any = [];

  timesheetForm = this.formBuilder.group({
    siteCode: '',
    contractor: '',
    date: '',
    jobOneCode: '',
    jobOneHours: '',
    jobTwoCode: '',
    jobTwoHours: '',
    jobThreeCode: '',
    jobThreeHours: '',
    machineOneCode: '',
    machineOneHours: '',
    machineTwoCode: '',
    machineTwoHours: '',
    machineThreeCode: '',
    machineThreeHours: '',
  });

  constructor(private formBuilder: FormBuilder, private siteObjects: SiteobjectService) { }

  ngOnInit(): void {
    this.siteObjects.getObjects().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].type == 1) {
            this.jobs.push(data[i].code);
          } else {
            this.machines.push(data[i].code);
          }
        }
      }, err => {
        alert('Error: ' + err.error.message);
      }
    );
  }

  clearForm() {
    this.timesheetForm.reset();
  }

}
