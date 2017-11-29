import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router/src/router_state';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private authService : AuthService) {}

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
}