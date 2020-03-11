import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css', '../common/safezone-common.css']
})
export class HomepageComponent implements OnInit {
  publicData: any;
  primeMember: boolean;
  loggedUser:string;

  constructor(
    private _HttpClient: HttpClient,
    private _Router: Router
  ) { }

  ngOnInit() {
    this.getPublicData();
    this.primeMember = localStorage.getItem('authStatus') === "200" ? true : false;
    this.loggedUser = localStorage.getItem('username') ? localStorage.getItem('username') : '';
    console.log("homepage", localStorage.getItem('authStatus'))
    
  }

  getPublicData() {

    this._HttpClient.get("assets/publicData.json").subscribe(data =>{
      console.log(data);
      this.publicData = data;
    })

  }

  Logout() {
    localStorage.setItem('username', '');
    localStorage.setItem('authStatus', "404");
    this.ngOnInit();
  }
}
