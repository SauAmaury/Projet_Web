import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginService } from './login.service';
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

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

  getGameList(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get('http://localhost:8080/gameCheck/getGames', {
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

  getGameConf(marq:string,idj:number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post('http://localhost:8080/gameCheck/games/conf', {
      marq: marq,
      idj: idj  
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


  getListSujet(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get('http://localhost:8080/forum/sujet', {
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

  setSujetNote(id:number,type:string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post('http://localhost:8080/forum/sujet/note', {
        id: id,
        updw : type
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


  getSujetMessage(id:number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post('http://localhost:8080/forum/sujet/message', {
        id: id
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
