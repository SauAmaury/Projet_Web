import { Component, OnInit } from '@angular/core';
import { loginService } from '../services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: loginService) { }

  ngOnInit() {
  }

  getState() {
    if(this.loginService.getState()){
      return "visible";
    }else{
      return "hidden";
    }
  }

}
