import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginService } from './login.service';

@Injectable()
export class Api {
  constructor(private http: HttpClient, private loginService: loginService) { }


  getListeConf(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post('http://localhost:8080/profil/list', {
        id: this.loginService.getId()
      })
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            console.log("Error occured");
            reject();
          }
        );
    });
  }

}
