import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/classes/user/user';
import { UserService } from '../../../shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})

export class UserCreateComponent implements OnInit {

  users: Observable<User[]>;
  user: User = new User();

  constructor(
    public userApi: UserService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  public addUser(): void {
    this.userApi.createUser(this.user)
      .subscribe(
        authUserData => {
          this.users = authUserData;
          console.log(authUserData);
          alert(`Authorized User had been added.`);
          this.returnAuthUsers(); },
        error => { console.log(error); },
      );
  }

  public returnAuthUsers(): void {
    this.router.navigate(['/admin/users/']);
  }

}
