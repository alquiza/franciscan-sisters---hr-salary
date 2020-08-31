import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../../shared/classes/auth/auth';
import { AuthService } from '../../shared/services/auth/auth.service';
import { User } from '../../shared/classes/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Observable<User[]>;
  user: User = new User();

  constructor(
    public authUser: AuthService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  public loginUser(): void {
    this.authUser.createAuthUser(this.user)
      .subscribe(
        loginData => {
          this.users = loginData;
          console.log(loginData);
          this.router.navigate(['hr-officers']);
          },
        error => { console.log(error); },
      );
  }

}
