import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {
  constructor(private http:HttpClient) {}
  // For rest webservice from zone
  getAllZones(){
    return new Promise(resolve=>{
      this.http.get('http://localhost:3000/api/ZoneMsts').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
  }
  getAllDivisions(){
    return new Promise(resolve=>{
      this.http.get('http://localhost:3000/api/DivisionMsts').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
  }
  getAvailableDivisions(zone){
    return new Promise(resolve=>{
      this.http.get('http://localhost:3000/api/DivisionMsts?filter=%7B%22where%22%3A%20%7B%22znCd%22%3A%22'+zone+'%22%7D%7D').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
  }
  getAvailableStations(division){
    return new Promise(resolve=>{
      this.http.get('http://localhost:3000/api/StationMsts?filter=%7B%22where%22%3A%7B%22divCd%22%3A%22'+division+'%22%7D%7D').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
  }

}
