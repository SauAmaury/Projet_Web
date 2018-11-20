import { Component, OnInit } from '@angular/core';
import { loginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isLogged: boolean;
  private email: string;
  private passwd: string;

  constructor(private loginService: loginService, private router: Router) { }

  ngOnInit() {
    this.isLogged = this.loginService.getState();
  }

  onSubmit() {
    console.log(this.loginService); 
    this.loginService.logIn(this.email, this.passwd).then( () => {
      console.log(this.loginService.getState());
      this.isLogged = this.loginService.getState();
      if (this.isLogged) { this.router.navigate(['profil']); }
    });

  }
}
