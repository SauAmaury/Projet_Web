import { Component, OnInit } from '@angular/core';
import { loginService } from '../services/login.service';
import { Api } from '../services/api.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  private config;

  constructor(private loginService: loginService, private api:Api) { }

  ngOnInit() {
   this.api.getListeConf().then((res) => {
     this.config = res;
   })   
  }

}
