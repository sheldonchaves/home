import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';


import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  data:any;

  constructor(public http:Http) {
    
  }

  ngOnInit(){

    this.load().then(
      (data) => {
        this.data = data.groups;
      }
    );


  }

  load() {

    return this.http.get('/assets/data.json')
    .map( response => response.json() )
    .toPromise();

  }


  public isCopied1:any;

  sheldon:string = "copiado do tsda sdas ddddasdd asd";
}
