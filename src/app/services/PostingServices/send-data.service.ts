import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  authToken:any;
  staff:any;

  constructor(private http:Http) { }

  registerStaff(staff){
    console.log(staff);
    return new Promise(resolve=>{
      this.http.post('http://localhost:3000/api/Medicalstaffs',
      {
       "firstname": staff.name,
       "middlename": null,
       "lastname": null,
       "healthcenter": "Railways Hospital",
       "designation": staff.designation,
       "department": staff.department,
       "station": staff.station,
       "email": staff.email,
       "mobile": staff.mobile,
       "railwayno": staff.railno,
       "role": staff.role
      }).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
  }

  registerHospital(hospital){
    return new Promise(resolve=>{
      this.http.post('http://localhost:3000/api/MedicalExamCentreMsts',
      {
        "hospitalName":hospital.name,
        "healthCareCenterCode":hospital.center,
        "zoneCd":hospital.zoneCode,
        "divCd":hospital.divisionCode,
        "stationCode":hospital.stationCd,
        "hospitalId":hospital.hospitalid
      }).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
  }
  
}
