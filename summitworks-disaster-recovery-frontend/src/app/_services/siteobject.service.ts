import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const OBJECTS_API = 'http://localhost:8080/api/objects/';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SiteobjectService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(OBJECTS_API + 'all', HTTP_OPTIONS);
  }

  getObject(id: number): Observable<any> {
    return this.http.get(OBJECTS_API + '')
  }

}
