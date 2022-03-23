import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegistrationServiceService } from './Service/registration-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: RegistrationServiceService, private route: Router) { }

  canActivate(): boolean {

    if (this.service.loggedIn()) {
      return true
    } else {
      this.route.navigate(['/login'])
      return false
    }

  }

}
