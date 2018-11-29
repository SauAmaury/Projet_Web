import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';
import { loginService } from '../services/login.service';
import { promise } from 'protractor';


@Component({
  selector: 'app-game-check',
  templateUrl: './game-check.component.html',
  styleUrls: ['./game-check.component.css']
})
export class GameCheckComponent implements OnInit {

  private gameList;
  private gameSelected;
  private isResolve: Promise<boolean>;
  private configList;
  private configSelected;
  private configr;
  private configm;
  private configu;

  constructor(private loginService: loginService, private api: Api) { }

  ngOnInit() {
    this.initGames();
    this.initConf();
  }

  initGames() {
    this.api.getGameList().then((res) => {
      this.gameList = res;
      this.gameSelected = res[0];
      this.getGameConfig(this.gameSelected.id);
    });
  }

  initConf() {
    this.api.getListeConf().then((res) => {
      this.configList = res;
      this.configSelected = res[0];
      this.getConfigDevices(this.configSelected.id);
    });
  }

  getConfigDevices(idc: number) {
    this.api.getListeConfDevices(idc).then((res) => {
      this.configu = res;
    });
  }

  getGameConfig(idj: number) {
    let p1 = new Promise((resolve, reject) => {
      this.api.getGameConf("r", idj).then((res) => {
        this.api.getListeConfDevices(res).then((res2) => {
          this.configr = res2;
          resolve();
        });
      });
    });
    let p2 = new Promise((resolve, reject) => {
      this.api.getGameConf("m", idj).then((res) => {
        this.api.getListeConfDevices(res).then((res2) => {
          this.configm = res2;
          resolve();
        });
      });
    });
    Promise.all([p1, p2]).then(() => { this.isResolve = Promise.resolve(true); });
  }

  onGameChange() {
    this.getGameConfig(this.gameSelected.id);
  }

  onConfigChange() {
    this.getConfigDevices(this.configSelected.id);
  }



}
