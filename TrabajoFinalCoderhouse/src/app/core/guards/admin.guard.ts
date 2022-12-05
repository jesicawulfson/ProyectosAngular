import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { SesionState } from '../state/sesion.reducer';
import { selectUsuarioAdminState } from '../state/sesion.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private store: Store<SesionState>,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.store.select(selectUsuarioAdminState).pipe(
            map((esAdmin: boolean | undefined) => {
              if(esAdmin){
                return true;
              }else{
                alert("No tiene permisos para acceder a esta sección");
                return false;
              }
            })
          );   
  }
}
