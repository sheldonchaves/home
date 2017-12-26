import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-fontawesome',
  templateUrl: './fontawesome.component.html',
  styleUrls: ['./fontawesome.component.css']
})
export class FontawesomeComponent implements OnInit {

  public dataIcons:any;

  public copyTag:boolean = false;
  public searchText:string;
 
  constructor(public http:Http) {
    
  }

  ngOnInit(){
    
    this.loadIcons().then(
      (data) => {
        this.dataIcons = data.icons;
      }
    ); 
  }

  copy(value){
    return this.copyTag ? '<i class="fa fa-'+value+'" aria-hidden="true"></i>':'fa-'+value;
  }
  
  loadIcons() {
    return this.http.get('assets/icons47.json')
    .map( response => response.json() )
    .toPromise();
    
  }

}
