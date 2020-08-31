/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  usersApi = 'http://127.0.0.1:8000/users/';
  httpHeader = new HttpHeaders(
    {'Content-Type': 'application/json'},
  );

  constructor(
    public http: HttpClient,
  ) {
  }

  public createUser(userData): Observable<any> {
    return this.http.post(
      `${this.usersApi}`, userData,
      {headers: this.httpHeader},
    );
  }


  public readOneUser(id: number): Observable<any> {
    return this.http.get(
      `${this.usersApi}` + id + '/',
      {headers: this.httpHeader},
    );
  }

  public readAllUser(): Observable<any> {
    return this.http.get(
      `${this.usersApi}`, {headers: this.httpHeader},
    );
  }

  public updateUser(id: number, value: any): Observable<any> {
    return this.http.put(
      `${this.usersApi}` + id, value,
      {headers: this.httpHeader},
    );
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete(
      `${this.usersApi}` + id,
      {headers: this.httpHeader},
    );
  }

}
