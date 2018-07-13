import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private http:HttpClient) {}


  getAllData(url){
    return new Promise(resolve=>{
      this.http.get(url).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
  }

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
