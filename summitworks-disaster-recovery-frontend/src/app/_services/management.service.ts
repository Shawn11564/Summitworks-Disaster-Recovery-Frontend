import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const USERS_API = 'http://localhost:8080/api/users/';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  getUsers(): Observable<any> {
    return this.http.get(USERS_API + 'all', HTTP_OPTIONS);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(USERS_API + 'delete/' + id, HTTP_OPTIONS);
  }

  makeAdmin(id: number): Observable<any> {
    return this.http.put(USERS_API + 'admin/' + id, HTTP_OPTIONS);
  }

  isUser(id: number): boolean {
    return this.token.getUser().id == id;
  }

}
