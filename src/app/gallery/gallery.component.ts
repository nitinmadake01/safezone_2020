import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css','../common/safezone-common.css']
})
export class GalleryComponent implements OnInit {
  loggedUser:string;

  constructor(
    readonly _Router:Router
  ) { }

  ngOnInit() {
    this.loggedUser = localStorage.getItem('username') ? localStorage.getItem('username') : '';
  }

  Logout(){
    localStorage.setItem('authStatus', "404");
    this._Router.navigateByUrl('/home');
  }

}
