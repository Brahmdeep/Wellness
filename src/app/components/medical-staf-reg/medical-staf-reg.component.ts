import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SendDataService } from '../../services/PostingServices/send-data.service';
import { FlashMessagesService } from '../../../../node_modules/angular2-flash-messages';

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
    private router:Router,
    private sendData:SendDataService,
    private flash:FlashMessagesService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('status')=='false'){
      alert('login first !');
      this.router.navigate(['/']);
    }else if(localStorage.getItem('status')=='true' && localStorage.getItem('role')=='Doctor'){
      alert('You have insufficient rights to access this content');
      this.router.navigate(['/']);
    }else if(localStorage.getItem('status')=='true' && localStorage.getItem('role')=='Nurse'){
      alert('You have insufficient rights to access this content');
      this.router.navigate(['/']);
    }
  }
  onClickSubmit(){
    var url="http://localhost:3000/api/Medicalstaffs";
    let employee={
      "department": this.department,
      "designation": this.designation,
      "email": this.emailid,
      "firstname": this.firstname,
      "healthcenter": "Railways Hospital",
      "lastname": this.lastname,
      "mId": "M"+Date.now(),
      "middlename": this.middlename,
      "mobile":this.mobileno,
      "password": this.password,
      "railwayno": this.railwayno,
      "role": this.role,
      "station": this.station
    }
    this.sendData.sendData(url,employee).then(data=>{
      this.flash.show("Registered Successfull",{cssClass:'alert-success',timeout:3000});
    },err=>{
      // this.flash.show(err.message,{cssClass:'alert-danger',timeout:3000})
    })
  }

}
