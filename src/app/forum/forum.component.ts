import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
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

  up(id:number) {
    this.api.setSujetNote(id,"u").then(() => {this.initSujets()});
  }

  down(id:number) {
    this.api.setSujetNote(id,"d").then(() => {this.initSujets()});
  }

  show(id:number) {
    this.api.getSujetMessage(id).then(() => {this.appendMessages(1)});
  }

  appendMessages(id:number) {
    console.log("append !");
    let d:HTMLElement = document.getElementById(String(id));
    let e:HTMLElement = document.createElement("div");
    e.setAttribute('class','message');
    e.appendChild(document.createTextNode("TEST"));

    d.insertAdjacentElement("afterend",e);


  }

}
