import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const TIMESHEET_API = 'http://3.91.6.210:8080/api/timesheet/';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private http: HttpClient) { }

  getAllTimesheets(): Observable<any> {
    return this.http.get(TIMESHEET_API + 'admin/all', HTTP_OPTIONS);
  }

  getTimesheet(id: string): Observable<any> {
    return this.http.get(TIMESHEET_API + 'timesheet/' + id, HTTP_OPTIONS);
  }

  getTimesheetCost(id: string): Observable<any> {
    return this.http.get(TIMESHEET_API + 'timesheet/' + id + '/cost', HTTP_OPTIONS);
  }

  deleteTimesheet(id: string): Observable<any> {
    return this.http.delete(TIMESHEET_API + 'admin/delete/' + id, HTTP_OPTIONS);
  }

  approveTimesheet(id: string): Observable<any> {
    return this.http.put(TIMESHEET_API + 'admin/approve/' + id, HTTP_OPTIONS);
  }

  addSiteObjectToTimesheet(timesheetId: string, siteobjectId: string): Observable<any> {
    return this.http.post(TIMESHEET_API + 'timesheet/' + timesheetId + "/add/" + siteobjectId, HTTP_OPTIONS);
  }

  createTimesheet(timesheet: any): Observable<any> {
    return this.http.post(TIMESHEET_API + 'create', {
      siteCode: timesheet.siteCode,
      contractor: timesheet.contractor,
      date: timesheet.date,
      jobOneCode: timesheet.jobOneCode,
      jobOneHours: timesheet.jobOneHours,
      jobTwoCode: timesheet.jobTwoCode,
      jobTwoHours: timesheet.jobTwoHours,
      jobThreeCode: timesheet.jobThreeCode,
      jobThreeHours: timesheet.jobThreeHours,
      machineOneCode: timesheet.machineOneCode,
      machineOneHours: timesheet.machineOneHours,
      machineTwoCode: timesheet.machineTwoCode,
      machineTwoHours: timesheet.machineTwoHours,
      machineThreeCode: timesheet.machineThreeCode,
      machineThreeHours: timesheet.machineThreeHours
    });
  }

  // createTimesheet(timesheet: any): Observable<any> {
  //   return this.http.post(TIMESHEET_API + 'create', {
  //     siteCode: timesheet.siteCode,
  //     contractor: timesheet.contractor,
  //     date: timesheet.date,
  //     jobs: {
  //       one: {
  //         code: timesheet.jobOneCode,
  //         hours: timesheet.jobOneHours
  //       },
  //       two: {
  //         code: timesheet.jobTwoCode,
  //         hours: timesheet.jobTwoHours
  //       },
  //       three: {
  //         code: timesheet.jobThreeCode,
  //         hours: timesheet.jobThreeHours
  //       }
  //     },
  //     machines: {
  //       one: {
  //         code: timesheet.machineOneCode,
  //         hours: timesheet.machineOneHours
  //       },
  //       two: {
  //         code: timesheet.machineTwoCode,
  //         hours: timesheet.machineTwoHours
  //       },
  //       three: {
  //         code: timesheet.machineThreeCode,
  //         hours: timesheet.machineThreeHours
  //       }
  //     }
  //   }, HTTP_OPTIONS);
  // }

}
