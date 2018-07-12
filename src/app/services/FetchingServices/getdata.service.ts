import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private http:HttpClient) {}

  


  getemployee(url){
    return new Promise(resolve=>{
      this.http.get(url).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
  }
}
