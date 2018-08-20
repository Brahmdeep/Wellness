import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import { GetdataService } from '../../../services/FetchingServices/getdata.service';
import { SendDataService } from '../../../services/PostingServices/send-data.service';
import { ValidationServiceService } from '../../../services/validation-Services/validation-service.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  today:any;
  
  doctors:any=[];

  /////////////////////////////
  examinedby:any;
  controllingauthority:any;
  medicalicard:any;
  medicalpass:any;
  registrationno:any;
  firstname:any;
  middlename:any;
  lastname:any;
  designation:any;
  department:any;
  servingstation:any;
  DOB:any;
  examinationdate:any;
  ////////////////////////////




  constructor(private router:Router,
  private getData:GetdataService,
  private sendData:SendDataService,
  private validate:ValidationServiceService) { }

  ngOnInit() {
    if(localStorage.getItem('status')=='false'){
      alert('login first !');
      this.router.navigate(['/']);
    }else if(localStorage.getItem('status')=='true' && localStorage.getItem('role')=='Nurse'){
      alert('You have insufficient rights to access this content');
      this.router.navigate(['/']);
    }
    this.getData.getAllData("http://localhost:3000/api/Medicalstaffs?filter=%7B%22where%22%3A%7B%20%22role%22%3A%20%22Doctor%22%7D%7D").then(data=>{
      this.doctors=data;
    },err=>{
      console.log(err);
    })
  }
  onclicksubmit(){
    var url="http://localhost:3000/api/Employeebasicinfos";
    let employee={
        "controllingauthority": this.controllingauthority,
        "dataofbirth": this.DOB,
        "datenow": new Date().getTime(),
        "department": this.department,
        "designation": this.designation,
        "division": "KATIHAR DIVISION",
        "eid": "E"+Date.now(),
        "employeeservicestation": this.servingstation,
        "examinedat": "Railway Hospital",
        "examinedby": this.examinedby,
        "examineddate": this.examinationdate,
        "firstname": this.firstname,
        "lastname": this.lastname,
        "medicalcard":this.medicalicard ,
        "medicalpass": this.medicalpass,
        "middlename": this.middlename,
        "registrationno": this.registrationno,
        "station": "NJP",
        "zone": "NORTH FRONTIER RAILWAY"
    }
    this.validate.eidInstance(employee.eid);
    this.sendData.sendData(url,employee).then(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    })
    // console.log(new Date(employee.datenow));
    // var date=new Date().getTime();
    // console.log(new Date(date));
    // this.today=Date.now();
    // var seconds=new Date().getTime();
    // var d1 = new Date(2013, 0, 1);
    // var d2 = new Date(this.DOB);
    // console.log(typeof this.DOB+""+d2);
    // console.log(""+this.today+" "+seconds )
    // console.log(this.DOB);
    // this.router.navigate(['/basic/gpe']);
  }

}
