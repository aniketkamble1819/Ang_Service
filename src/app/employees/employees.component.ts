import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any;
  constructor(private api:ApiService){
    this.employees = api.employees
  
   }
  ngOnInit(): void {
    
      
  }

}
