import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent  implements OnInit{
  employees:any;
  user:any;
  image: any;
  

 


 constructor(private raj:ApiService, private httpClient:HttpClient){
  this.employees = raj.employees

 }


  ngOnInit(): void {
 this.httpClient.get("https://fakestoreapi.com/products").subscribe((result)=>{
 console.log(result);
 this.user = result;

})
    
   
   
}
 
   
    

  }
