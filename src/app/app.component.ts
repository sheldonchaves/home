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
  
  public dataCode:any;
  public isCopied1:any;
  
  constructor(public http:Http) {
    
  }
  
  ngOnInit(){
    
    this.loadCode().then(
      (data) => {
        this.dataCode = data.groups;
      }
    );
    
    
  }
  
  loadCode() {
    console.log("loadCode");
    return this.http.get('assets/data.json')
    .map( response => response.json() )
    .toPromise();
    
  }
  
  

}
