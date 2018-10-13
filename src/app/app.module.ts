import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { loginService } from './services/login.service';
import { ProfilComponent } from './profil/profil.component';
import { checkLogin } from './services/checkLogin.service';

const appRoutes: Routes = [
  {path: 'connexion', component: LoginComponent},
  {path: 'profil', canActivate: [checkLogin] , component: ProfilComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [loginService, checkLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
