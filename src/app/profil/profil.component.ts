import { Component, OnInit } from '@angular/core';
import { loginService } from '../services/login.service';
import { Api } from '../services/api.service';
import { TouchSequence } from 'selenium-webdriver';
import { resetApplicationState } from '@angular/core/src/render3/instructions';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  private state: string = "hidden";
  private type: string;

  private nomConf: string;

  private config;
  private configSelect;
  private cgListe;
  private cgListeSelect: number;
  private procListe;
  private procListeSelect: number;
  private memListe;
  private memListeSelect: number;
  private cg: string;
  private proc: string;
  private mem: string;

  constructor(private loginService: loginService, private api: Api) { }

  ngOnInit() {
    this.initConf();
    this.initList();
  }

  onConfigChange(value): void {
    console.log(value);
    console.log(Object.values(this.configSelect));
    /*this.api.getListeConfDevices(value.id).then((res) => {
      this.cg = res["cg"]["nom"]; this.cgListeSelect = res["cg"]["id"];
      this.proc = res["proc"]["nom"]; this.procListeSelect = res["proc"]["id"];
      this.mem = res["mem"]["nom"]; this.memListeSelect = res["mem"]["id"];
    });*/
  }

  initList() {
    this.api.getListeDevices("cg").then((res) => {
      this.cgListe = res;
    });

    this.api.getListeDevices("proc").then((res) => {
      this.procListe = res;
    });

    this.api.getListeDevices("mem").then((res) => {
      this.memListe = res;
    });
  }

  initConf() {
    this.api.getListeConf().then((res) => {
      this.config = res;
      this.configSelect = res[0];
    });
  }

  onClick(type: string) {
    if (type != "delete") {
      if (type === "add") this.resetSelect();
      this.state = "visible";
      this.type = type;
    } else {
      this.api.setConf("delete", this.configSelect, null, null, null, null).then((res) => {
        this.initConf();
      });
    }
  }

  onSubmitForm() {
    if (this.type === "add") {
      this.api.setConf("add", null, this.nomConf, this.cgListeSelect, this.procListeSelect, this.memListeSelect).then((res) => {
        this.initConf();
      });
    } else if (this.type === "modify") {
      this.api.setConf("modify", this.configSelect, this.nomConf, this.cgListeSelect, this.procListeSelect, this.memListeSelect).then((res) => {
        this.onConfigChange(this.configSelect);
      });
    }
    this.state = "hidden";
  }

  getState(): string {
    return this.state;
  }

  resetSelect() {
    this.cgListeSelect = null;
    this.procListeSelect = null;
    this.memListeSelect = null;
  }

}
