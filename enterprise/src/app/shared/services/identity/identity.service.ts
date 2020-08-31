/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IdentityService {

  identityApi = 'http://127.0.0.1:8000/identities/';
  httpHeader = new HttpHeaders(
    { 'Content-Type': 'application/json' },
  );

  constructor(
    public http: HttpClient,
  ) { }

  public createIdentities(identityData: any): Observable<any> {
    return this.http.post(
      `${this.identityApi}`, identityData,
      { headers: this.httpHeader },
    );
  }

  readAllIdentities(): Observable<any> {
    return this.http.get(
      `${this.identityApi}`,
      { headers: this.httpHeader },
    );
  }

  readOneIdentities(employee_id: string): Observable<any> {
    return this.http.get(
      `${this.identityApi}` + employee_id + '/',
      { headers: this.httpHeader },
    );
  }

  updateIdentities(employee_id: string, value: any): Observable<any> {
    return this.http.put(
      `${this.identityApi}` + employee_id + '/', value,
      { headers: this.httpHeader },
    );
  }

  deleteIdentities(employee_id: string): Observable<any> {
    return this.http.delete(
      `${this.identityApi}` + employee_id + '/',
      { headers: this.httpHeader },
    );
  }

}
