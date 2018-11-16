import { Component, OnInit } from '@angular/core';
import { loginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isLogged : boolean;
  private email : string;
  private passwd : string;
  
  constructor(private loginService: loginService, private router: Router) { }

  ngOnInit() {
    this.isLogged = this.loginService.getState();
  }

  onSubmit() {
    let res = this.isLogged = this.loginService.logIn(this.email,this.passwd);
    if(res) {this.router.navigate(['profil']);}
    else{console.log("pas bon")};
  }
}
