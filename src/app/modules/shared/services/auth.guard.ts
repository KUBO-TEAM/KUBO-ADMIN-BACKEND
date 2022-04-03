import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiAuthenticationService } from '../../api-authentication/presentation/api-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authenticationService : ApiAuthenticationService,
    private router: Router,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.authenticationService.isAuthenticated();

    if(route.url.length === 0 && isAuthenticated){
      this.router.navigate(['/overview']);
      return false;
    } else if(route.url.length !== 0 && !isAuthenticated){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
