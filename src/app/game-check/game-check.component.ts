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
  private isResolve : Promise<boolean>;
  private configList;
  private configSelected;
  private configr;
  private configm;

  constructor(private loginService: loginService, private api: Api) { }

  ngOnInit() {
    this.initGames();
    this.initConf();
  }

  initGames() {
    this.api.getGameList().then((res) => {
      this.gameList = res;
      this.gameSelected = res[0];
      this.getRecomConfig(this.gameSelected.id);
      this.getMinConfig(this.gameSelected.id);
    });
  }

  initConf() {
    this.api.getListeConf().then((res) => {
      this.configList = res;
      this.configSelected = res[0];
    });
  }

  getRecomConfig(idj: number) {
    this.api.getGameConf("r", idj).then((res) => {
      this.api.getListeConfDevices(res).then((res) => {
        this.configr = res;
      });
    });
  }

  getMinConfig(idj: number) {
    this.api.getGameConf("m", idj).then((res) => {
      this.api.getListeConfDevices(res).then((res) => {
        this.configm = res;
        this.isResolve = Promise.resolve(true);
      });
    });
  }

  onGameChange() {
    console.log(this.gameSelected.id);
    this.getRecomConfig(this.gameSelected.id);
    this.getMinConfig(this.gameSelected.id);
  }



}
