import { Component, OnInit } from '@angular/core';
import { loginService } from '../services/login.service';
import { Api } from '../services/api.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  private config;
  private configSelect: number;
  private cg: string;
  private proc: string;
  private mem: string;

  constructor(private loginService: loginService, private api: Api) { }

  ngOnInit() {
    this.api.getListeConf().then((res) => {
      this.config = res;
      this.configSelect = res[0]["id"];
      this.onConfigChange(this.configSelect);
    })
  }

  onConfigChange(value: number): void {
    this.configSelect = value;
    this.api.getListeConfDevices(value).then((res) => {
      this.cg = res["cg"]["nom"];
      this.proc = res["proc"]["nom"];
      this.mem = res["mem"]["nom"];
    });
  }

}
