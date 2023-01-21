import { Component, OnInit } from '@angular/core';
import { UrlService } from './url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'Ang_sirvice';

  
constructor(private api:UrlService){

}


  ngOnInit(): void {
    this.api.get("https://fakestoreapi.com/users").subscribe((result: any)=>{
      console.log(result);
      
    })
  
  }
 
}
