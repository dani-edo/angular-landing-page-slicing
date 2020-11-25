import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.authService.loggedIn().subscribe(
        () => {
          resolve(true);
        },
        () => {
          this.router.navigate(['/login']);
          resolve(false);
        }
      );
    });
  }
}
