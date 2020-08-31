import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent {

  appPageTitle = 'HR & Payroll Masters';
  buttonOfficial00 = 'Home';
  buttonOfficial01 = 'Login';
  buttonOfficial02 = 'Logout';
  buttonOfficial03 = 'Bundy';
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
  ) { }

  public main(): void {
    this.router.navigate(['/']);
  }

  public login(): void {
    this.router.navigate(['/login']);
  }

  public logout(): void {
    this.router.navigate(['/']);
  }

  public bundy(): void {
    this.router.navigate(['/hr-officer']);
  }
}
