import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { loginService } from "./login.service";

@Injectable()
export class checkLogin implements CanActivate{

constructor(private loginService : loginService,
            private router: Router){};

canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if(this.loginService.getState())
            {
                return true;
            }else{
                this.router.navigate(['/connexion']); 
            } 

        }
    }

    