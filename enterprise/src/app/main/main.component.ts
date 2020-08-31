import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  appPageTitle = 'HR & Payroll Masters';
  buttonOfficial00 = 'Home';
  buttonOfficial01 = 'Login';
  buttonOfficial02 = 'Logout';
  buttonOfficial03 = 'HR Officers';
  isAuthenticated: boolean;

  isHandset$: Observable<boolean> =
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
  ) {}

  ngOnInit(): void {}

  public main(): void {
    this.router.navigate(['/']);
  }

  public login(): void {
    this.router.navigate(['/login']);
  }

  public logout(): void {
    this.router.navigate(['/']);
  }

  public hr(): void {
    this.router.navigate(['/hr-officer']);
  }

}
