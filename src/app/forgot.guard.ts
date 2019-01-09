import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StatService } from './stat.service';

@Injectable({
  providedIn: 'root'
})
export class ForgotGuard implements CanActivate {
  constructor(private statservice : StatService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.statservice.forgot;
  }
}
