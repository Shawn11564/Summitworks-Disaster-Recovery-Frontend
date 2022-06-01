import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const TIMESHEET_API = 'http://localhost:8080/api/timesheet/';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private http: HttpClient) { }

  getAllTimesheets(): Observable<any> {
    return this.http.get(TIMESHEET_API + 'all', HTTP_OPTIONS);
  }

  getTimesheet(id: number): Observable<any> {
    return this.http.get(TIMESHEET_API + 'timesheet/' + id, HTTP_OPTIONS);
  }

}
