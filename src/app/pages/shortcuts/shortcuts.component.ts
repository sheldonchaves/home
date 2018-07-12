import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css']
})
export class ShortcutsComponent implements OnInit {

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

  copy(value:string){
    let re = /\'\'/gi;
    return value.replace(re, '"');
  }
  
  loadCode() {
    return this.http.get('assets/data.json')
    .map( response => response.json() )
    .toPromise();
    
  }
}
