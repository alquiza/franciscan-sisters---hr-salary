/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesApi = 'http://127.0.0.1:8000/employees/';
  httpHeader = new HttpHeaders(
    { 'Content-Type': 'application/json' },
  );

  constructor(
    public http: HttpClient,
  ) { }

  createEmployeeBasic(employeeBasicData: any): Observable<any> {
    return this.http.post(
      `${this.employeesApi}`, employeeBasicData,
      { headers: this.httpHeader },
    );
  }

  readAllEmployeeBasic(): Observable<any> {
    return this.http.get(
      `${this.employeesApi}`,
      { headers: this.httpHeader },
    );
  }

  readOneEmployeeBasic(employee_id: string): Observable<any> {
    return this.http.get(
      `${this.employeesApi}` + employee_id + '/',
      { headers: this.httpHeader },
    );
  }

  updateEmployeeBasic(employee_id: string, value: any): Observable<any> {
    return this.http.put(
      `${this.employeesApi}` + employee_id + '/', value,
      { headers: this.httpHeader },
    );
  }

  deleteEmployeeBasic(employee_id: string): Observable<any> {
    return this.http.delete(
      `${this.employeesApi}` + employee_id + '/',
      { headers: this.httpHeader },
    );
  }

}
