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

  getListeConfDevices(id:number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post('http://localhost:8080/profil/list/devices', {
        idc: id
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

  getListeDevices(type:string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get('http://localhost:8080/profil/list/'+type, {
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

  setConf(type:string,idc:number,name:string,idcg:number,idproc:number,idmem:number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post('http://localhost:8080/profil/'+type, {
        iduser: this.loginService.getId(),
        idc: idc,
        nom: name,
        idcg: idcg,
        idproc: idproc,
        idmem: idmem
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
