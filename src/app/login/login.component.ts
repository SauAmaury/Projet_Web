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
  
  constructor(private loginService: loginService, private router: Router) { }

  ngOnInit() {
    this.isLogged = this.loginService.getState();
  }

  onSubmit() {
    this.isLogged = this.loginService.logIn();
    this.router.navigate(['profil']);
  }
}
