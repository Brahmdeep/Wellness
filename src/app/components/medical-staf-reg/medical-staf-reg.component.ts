import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medical-staf-reg',
  templateUrl: './medical-staf-reg.component.html',
  styleUrls: ['./medical-staf-reg.component.css']
})
export class MedicalStafRegComponent implements OnInit {
  ///////////////////
  firstname:any;
  middlename:any;
  lastname:any;
  healthcenter:any;
  designation:any;
  department:any;
  station:any;
  emailid:any;
  password:any;
  railwayno:any;
  role:any;
  mobileno:any;
  ///////////////////
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('status')=='false'){
      alert('login first !');
      this.router.navigate(['/']);
   }
  }
  onClickSubmit(){
    let employee={
      "department": this.department,
      "designation": this.designation,
      "email": this.emailid,
      "firstname": this.firstname,
      "healthcenter": this.healthcenter,
      "lastname": this.lastname,
      "mId": "H"+Date.now(),
      "middlename": this.middlename,
      "mobile":this.mobileno,
      "password": this.password,
      "railwayno": this.railwayno,
      "role": this.role,
      "station": this.station
    }
    console.log(employee);
  }

}
