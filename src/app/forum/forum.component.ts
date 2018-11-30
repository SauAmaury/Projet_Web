import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Api } from '../services/api.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForumComponent implements OnInit {

  private sujets;
  private isResolve: Promise<boolean>;

  constructor(private api: Api) { }

  ngOnInit() {
    this.initSujets();
  }

  initSujets() {
    this.api.getListSujet().then((res) => {
      this.sujets = res;
      this.isResolve = Promise.resolve(true);
    });
  }

  up(id: number) {
    this.api.setSujetNote(id, "u").then(() => { this.initSujets() });
  }

  down(id: number) {
    this.api.setSujetNote(id, "d").then(() => { this.initSujets() });
  }

  show(id: number) {
    this.api.getSujetMessage(id).then((res) => { this.appendMessages(id, res) });
  }

  appendMessages(id: number, listeMessage) {
    console.log("append !");
    for (let i in listeMessage) {
      let d: HTMLElement = document.getElementById(String(id));

      let e: HTMLElement = document.createElement("div");
      e.setAttribute("class", "message");
      let e2: HTMLElement = document.createElement("div");
      e2.setAttribute("class", "sujet_score");
      let e3: HTMLElement = document.createElement("div");
      e2.setAttribute("class", "sujet_content");

      let imu: HTMLElement = document.createElement("img");
      imu.setAttribute("src","assets/images/icons/down.png");
      let score = document.createTextNode(listeMessage[i].score);
      let imd: HTMLElement = document.createElement("img");
      imd.setAttribute("src","assets/images/icons/up.png");
      e2.appendChild(imu); e2.appendChild(score); e3.appendChild(imd);

      e3.appendChild(document.createTextNode(listeMessage[i].cont));


      e.appendChild(e2);e.appendChild(e3);

      d.insertAdjacentElement("afterend", e);
    }

  }

}
