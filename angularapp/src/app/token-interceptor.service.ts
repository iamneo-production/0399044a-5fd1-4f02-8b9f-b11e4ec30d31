import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { RegistrationServiceService } from './Service/registration-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: any, next: any) {
    let regService = this.injector.get(RegistrationServiceService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${regService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
