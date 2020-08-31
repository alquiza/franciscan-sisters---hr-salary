import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/classes/user/user';
import { UserService } from '../../../shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-read-all',
  templateUrl: './user-read-all.component.html',
  styleUrls: ['./user-read-all.component.scss']
})

export class UserReadAllComponent implements OnInit {

  users: Observable<User[]>;
  user: User = new User();
  id: number;

  actionButton00 = 'Delete';
  actionButton01 = 'Details';

  userHeaders = [
    { name: 'Id', },
    { name: 'Username', },
    { name: 'Actions', },
  ];

  constructor(
    public userApi: UserService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.userApi.readAllUser()
      .subscribe(
        authUserData => { this.users = authUserData; },
        error => { console.log(error); },
      );
  }

 public authUserDetails(id: number) {
    this.router.navigate(['/admin/user/', id]);
 }

 public deleteAuthUser(id: number) {
    this.userApi.deleteUser(this.id)
      .subscribe(
        authUserData => { this.users = authUserData; console.log(authUserData); },
        error => { console.log(error); },
      );
 }

}
