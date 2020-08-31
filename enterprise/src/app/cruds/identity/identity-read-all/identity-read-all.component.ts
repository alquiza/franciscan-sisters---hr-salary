import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Identity } from '../../../shared/classes/identity/identity';
import { IdentityService } from '../../../shared/services/identity/identity.service';
import { Employee } from '../../../shared/classes/employee/employee';
import {EmployeeService} from "../../../shared/services/employee/employee.service";

@Component({
  selector: 'app-identity-read-all',
  templateUrl: './identity-read-all.component.html',
  styleUrls: ['./identity-read-all.component.scss']
})

export class IdentityReadAllComponent implements OnInit {

  employees: Observable<Employee[]>;
  identities: Observable<Identity[]>;
  employee: Employee = new Employee();
  identity: Identity = new Identity();

  actionButton00 = 'Delete';
  actionButton01 = 'Details';

  identityHeads = [
    { name: 'Employee ID#s: ',},
    { name: 'Tax Id #s: ',},
    { name: 'Surname: ',},
    { name: 'First Name: ',},
    { name: 'Actions',},
  ];

  constructor(
    public identityApi: IdentityService,
    public employeeApi: EmployeeService,
  ) { }

  ngOnInit() {
    this.identityApi.readAllIdentities()
      .subscribe(
        identitiesData => {
          this.identities = identitiesData; console.log(identitiesData);
        },
        error => { console.log(error); },
      );
    this.employeeApi.readAllEmployeeBasic()
      .subscribe(
        employeeData => {
          this.employees = employeeData; console.log(employeeData);
        },
        error => { console.log(error); },
      )
  }


}
