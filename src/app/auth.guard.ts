import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanLoad {
  // Inject Router so we can hand off the user to the Login Page
  constructor(private router: Router) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    if ( sessionStorage.getItem('is_user_logged_in') == 'true' ) {
      // Token from the LogIn is avaiable, so the user can pass to the route
      return true;
    } else  {
      // Token from the LogIn is not avaible because something went wrong or the user wants to go over the url to the site
      // Hands the user to the LogIn page
      alert('You are currently not logged in, please provide Login!');
      this.router.navigate( ['/login'] );
      return false;

    }

  }
}
