import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { loginService } from './services/login.service';
import { ProfilComponent } from './profil/profil.component';
import { checkLogin } from './services/checkLogin.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Api } from './services/api.service';
import { GameCheckComponent } from './game-check/game-check.component';

const appRoutes: Routes = [
  {path: 'connexion', component: LoginComponent},
  {path: 'profil', canActivate: [checkLogin] , component: ProfilComponent},
  {path: 'gamecheck', canActivate: [checkLogin] , component: GameCheckComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProfilComponent,
    GameCheckComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [loginService, checkLogin, Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
