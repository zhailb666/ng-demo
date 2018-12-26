import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivateChild {
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
