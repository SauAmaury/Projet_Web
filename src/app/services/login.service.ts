import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class loginService {

    private isConnected = false;
    private id;

    constructor(private http: HttpClient) { }

    logIn(mail: string, passwd: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.http.post('http://localhost:8080/login/check', {
                email: mail,
                mdp: passwd
            })
                .subscribe(
                    res => {
                        if (res["res"] === "ok") {
                            this.isConnected = true;
                            this.id = res["id"];
                        }
                        resolve();
                    },
                    err => {
                        console.log("Error occured");
                        reject();
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

    getId(): string {
        return this.id;
    }

}
