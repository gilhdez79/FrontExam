import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { SrvGeneralInfoService } from '../servicios/srv-general-info.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardsGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router:Router,
    public srvGeneralDatos:SrvGeneralInfoService
    ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.srvGeneralDatos.datosUserInfo.IsLogged){
      return true;
    }else{
      return false;
    }


  }

}
