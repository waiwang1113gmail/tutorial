import { Injectable } from '@angular/core'; 

import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad,
  NavigationExtras,
  Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild, CanLoad{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let url: string = state.url;
    return this.checkLogin(url);
  }
  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }


  checkLogin(url: string): boolean{
    if(this.authService.isLoggedIn)
      return true;

    let sessionId = 123456;

    let navExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId},
      fragment: 'anchor'
    }
    this.authService.redirectUrl = url;

    this.router.navigate(['/login'], navExtras);

    return false;
  }
}
