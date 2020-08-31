import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authApi = 'http://127.0.0.1:8000/auth/';
  httpHeader = new HttpHeaders(
    { 'Content-Type': 'application/json' },
  )

  constructor(
    public http: HttpClient,
  ) { }

  public createAuthUser(AuthUserData: any): Observable<any> {
    return this.http.post(
      `${this.authApi}`, AuthUserData,
      { headers: this.httpHeader},
    );
  }

  public readOneAuthUser(id: number): Observable<any> {
    return this.http.get(
      `${this.authApi}` + id + '/',
      { headers: this.httpHeader},
    );
  }

  public readAllAuthUser(): Observable<any> {
    return this.http.get(
      `${this.authApi}`,
      { headers: this.httpHeader },
    );
  }

  public updateAuthUser(id: number, value: any): Observable<any> {
    return this.http.put(
      `${this.authApi}` + id + '/', value,
      { headers: this.httpHeader },
    );
  }

  public deleteAuthUser(id: number): Observable<any> {
    return this.http.delete(
      `${this.authApi}` + id,
      { headers: this.httpHeader },
    );
  }

}
