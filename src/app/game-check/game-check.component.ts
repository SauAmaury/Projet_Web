import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';
import { loginService } from '../services/login.service';

@Component({
  selector: 'app-game-check',
  templateUrl: './game-check.component.html',
  styleUrls: ['./game-check.component.css']
})
export class GameCheckComponent implements OnInit {

  private gameList;
  private gameSelected;
  private configList;
  private configSelected;

  constructor(private loginService: loginService,private api: Api) { }

  ngOnInit() {
    this.initGames();
    this.initConf();
  }

  initGames() {
    this.api.getGameList().then((res) => {
      this.gameList = res;
      this.gameSelected = res[0];
    });
  }

  initConf() {
    this.api.getListeConf().then((res) => {
      this.configList = res;
      this.configSelected = res[0];
    });
  }



}
