import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  publicData: any;
  primeMember: boolean;

  constructor(
    private _HttpClient: HttpClient,
    private _Router: Router
  ) { }

  ngOnInit() {
    this.primeMember = localStorage.getItem('authStatus') === "200" ? true : false;
    console.log("homepage", localStorage.getItem('authStatus'))
    this._HttpClient.get("/assets/publicData.json").subscribe(data => {
      let Data: any = data;
      this.publicData = Data.images;
      console.log(this.publicData, "public s")
    })
  }

  Logout() {
    localStorage.setItem('authStatus', "404");
    this.ngOnInit();
  }
  ngOnDestroy() {
    console.log("HomepageComponent destroy");
  }

}
