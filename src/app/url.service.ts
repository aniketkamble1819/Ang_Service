import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  

  constructor(private http:HttpClient) {
   }
   get(url:string){
    return this.http.get(url)

   }
}
