import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  primeMember: boolean;
  constructor(readonly _Router: Router) { }

  ngOnInit() {
    this.primeMember = localStorage.getItem('authStatus') === '200' ? true : false;
  }

  Logout() {
    localStorage.setItem('authStatus', "404");
    this._Router.navigateByUrl('/home');
  }

}
