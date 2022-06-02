import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SiteobjectService } from '../_services/siteobject.service';

@Component({
  selector: 'app-siteobject',
  templateUrl: './siteobject.component.html',
  styleUrls: ['./siteobject.component.css']
})
export class SiteobjectComponent implements OnInit {

  form: any = {};
  objects: any = []

  objectForm = this.formBuilder.group({
    code: '',
    type: '',
    description: '',
    hourlyRate: '',
    maxHoursPerDay: ''
  });

  constructor(private objectService: SiteobjectService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.closeForm();
    this.refresh();
  }

  onSubmit(): void {
    this.objectService.createObject(this.objectForm.value).subscribe(
      data => {
        this.closeForm();
        this.refresh();
      }, err => {
        alert('Error saving object: ' + err.error.message);
      }
    )
    this.objectForm.reset();
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
      }, err => {
        alert('Error: ' + err.error.message);
      }
    );
  }

  edit(id: any): void {
    
  }

  delete(id: any): void {
    this.objectService.deleteObject(id).subscribe(
      data => {
        this.refresh();
      }, err => {
        alert('Error: ' + err.error.message);
      }
    )
  }

}
