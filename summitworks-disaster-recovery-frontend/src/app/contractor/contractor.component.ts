import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {

  timesheetForm = this.formBuilder.group({
    siteCode: '',
    contractor: '',
    date: '',
    jobEntries: '',
    machineEntries: ''
  });

  jobForm = this.formBuilder.group({
    jobOneCode: '',
    jobOneHours: '',
    jobTwoCode: '',
    jobTwoHours: '',
    jobThreeCode: '',
    jobThreeHours: '',
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
