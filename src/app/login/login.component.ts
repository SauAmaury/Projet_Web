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
  private email: string ="user@test.com";
  private passwd: string= "test";

  constructor(private loginService: loginService, private router: Router) { }

  ngOnInit() {
    this.isLogged = this.loginService.getState();
    if (this.isLogged) { this.router.navigate(['profil']); }
  }

  onSubmit() {
    this.loginService.logIn(this.email, this.passwd).then(() => {
      this.isLogged = this.loginService.getState();
      if (this.isLogged) { this.router.navigate(['profil']); }
    });

  }
}
