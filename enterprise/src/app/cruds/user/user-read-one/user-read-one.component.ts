import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../shared/classes/user/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../shared/services/user/user.service";

@Component({
  selector: 'app-user-read-one',
  templateUrl: './user-read-one.component.html',
  styleUrls: ['./user-read-one.component.scss']
})

export class UserReadOneComponent implements OnInit {
  users: Observable<User[]>;
  user: User = new User();
  id: number;

  authUserLabel00 = 'Username';
  authUserLabel01 = 'Email';
  authUserLabel02 = 'Password';
  authUserLabel03 = 'Surname';
  authUserLabel04 = 'First Name';
  authActionButton00 = 'Update';
  authActionButton01 = 'Delete';
  authActionButton02 = 'Auth Users';

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public userApi: UserService,
  ) { }

  ngOnInit(){
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.userApi.readOneUser(this.id)
      .subscribe(
        userData => { this.user = userData; },
        error => { console.log(error); },
      );
  }

  public returnAuthUsers() {
    this.router.navigate(['/admin/users/']);
  }

  public editAuthUser(): void {
    this.userApi.updateUser(this.id, this.user)
      .subscribe(
        authUserData => { this.user = authUserData; console.log(authUserData); },
        error => { console.log(error); },
      );
  }

  public deleteAuthUser(): void {
    this.userApi.deleteUser(this.id)
      .subscribe(
        authUserData => { this.user = authUserData; },
        error => { console.log(error); },
      );
  }

}
