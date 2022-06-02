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

  getTimesheet(id: string): Observable<any> {
    return this.http.get(TIMESHEET_API + 'timesheet/' + id, HTTP_OPTIONS);
  }

  deleteObject(id: string): Observable<any> {
    return this.http.delete(TIMESHEET_API + 'delete/' + id, HTTP_OPTIONS);
  }

  // createObject(obj: any): Observable<any> {
  //   return this.http.post(TIMESHEET_API + 'create', {
  //     code: obj.code,
  //     type: obj.type,
  //     description: obj.description,
  //     hourlyRate: obj.hourlyRate,
  //     maxHoursPerDay: obj.maxHoursPerDay
  //   }, HTTP_OPTIONS);
  // }

}
