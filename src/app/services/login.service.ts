import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class loginService {

    private isConnected = false;

    constructor(private http: HttpClient) {}

    logIn(mail: string, passwd: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.http.post('http://localhost:8080/login/check', {
            email: mail,
            mdp: passwd
        })
            .subscribe(
                res => {
                    if (res[0] === "ok")   this.isConnected = true;
                    console.log(res);
                    resolve();
                },
                err => {
                    console.log("Error occured");
                }
            );
          });
    }

    logOut(): boolean {
        this.isConnected = false;
        return this.getState();
    }

    getState(): boolean {
        return this.isConnected;
    }

}
