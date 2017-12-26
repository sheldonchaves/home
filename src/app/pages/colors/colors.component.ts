import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  public dataColors:any;
 
  constructor(public http:Http) {
    
  }


  ngOnInit(){
    
    this.loadColors().then(
      (data) => {
        this.dataColors = data.colors.filter((el, i, a) => i === a.indexOf(el))
      }
    );
    
    
  }
  
  loadColors() {
    return this.http.get('assets/color1.json')
    .map( response => response.json() )
    .toPromise();
    
  }

}
