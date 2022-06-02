import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../_services/management.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  users: any = [];

  constructor(private managementService: ManagementService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.managementService.getUsers().subscribe(
      data => {
        this.users = data;
      }, err => {
        alert('Error: ' + err.error.message);
      }
    );
  }

  edit(id: any): void {
    
  }

  delete(id: any): void {
    this.managementService.deleteUser(+id).subscribe(
      data => {
        this.refresh();
      }, err => {
        alert('Error: ' + err.error.message);
      }
    )
  }

  admin(user: any): void {
    this.managementService.makeAdmin(+user.id).subscribe(
     data => {
      alert('User: ' + user.username + ' is now an Admin!');
      }, err => {
        alert('Error: ' + err.error.message);
      }
    )
  }

  isUser(id: number): boolean {
    return this.token.getUser().id == id;
  }

}
