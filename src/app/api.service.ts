import { Injectable } from '@angular/core';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  employees = [
    {no:1, name:"abhi", age:23},
    {no:2, name:"avi", age:32},
    {no:3, name:"viky", age:55},
    {no:4, name:"sani", age:45},
  ]
  
  constructor() { }

  
}
