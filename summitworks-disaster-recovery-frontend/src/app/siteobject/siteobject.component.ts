import { Component, OnInit } from '@angular/core';
import { SiteobjectService } from '../_services/siteobject.service';

@Component({
  selector: 'app-siteobject',
  templateUrl: './siteobject.component.html',
  styleUrls: ['./siteobject.component.css']
})
export class SiteobjectComponent implements OnInit {

  objects: any = []

  constructor(private objectService: SiteobjectService) { }

  ngOnInit(): void { }

  createObject(): void {

  }
  
  refresh(): void {
    // this.objectService.getUsers().subscribe(
    //   data => {
    //     this.users = data;
    //   }
    // );
  }

  edit(id: any): void {
    
  }

  delete(id: any): void {
    // this.objectService.deleteUser(+id).subscribe(
    //   data => {
    //     this.refresh();
    //   }
    // )
  }

  admin(user: any): void {
    // this.objectService.makeAdmin(+user.id).subscribe(
    //  data => {
    //   alert('User: ' + user.username + ' is now an Admin!');
    //  }
    // )
  }

}
