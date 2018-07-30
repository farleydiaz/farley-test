import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './AuthService';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class SecurityGuard implements CanActivate {

    constructor(protected router: Router, protected auth: AuthService) {}

    canActivate(
        next: ActivatedRouteSnapshot 
    ): Observable<boolean> {
        const expectedRoles = next.data.expectedRole;
        return this.auth.user$.pipe(
            take(1),
            map((user: any) => user && (user.status === 1) && this.auth.canRead(user, expectedRoles) ? true : false),
            tap(canView => {
                    if (!canView) {
                        this.router.navigate(['login']);
                    }
                })
            );
    }
}
