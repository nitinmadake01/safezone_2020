import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  publicData: any;
  showGallery:boolean;

  constructor(
    private _HttpClient: HttpClient
  ) { }

  ngOnInit() {
    if(localStorage.getItem('authStatus') === "200"){
      this.showGallery = true;
    }
    console.log("homepage",localStorage.getItem('authStatus'))
    this._HttpClient.get("/assets/publicData.json").subscribe(data => {
      let Data: any = data;
      this.publicData = Data.images;
      console.log(this.publicData, "public s")
    })
  }

  logout(){
    alert('hi');
    let key="authStatus"
    localStorage.setItem(key, "404");
  } 
  ngOnDestroy(){
    console.log("HomepageComponent destroy");
  }

}
